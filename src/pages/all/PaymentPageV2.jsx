import { Box, Button, Divider, Heading, HStack, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Spacer, Spinner, Stack, Text, useToast, VStack } from '@chakra-ui/react';
import { arrayUnion, doc, setDoc } from 'firebase/firestore';
import moment from 'moment';
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { apiPaymentXendit, apiPaymentXenditRecurring } from '../../api/ApiList';
import { authFirebase, db } from '../../config/firebase';
import { formatFrice } from '../../utils/Helper';


function PaymentPageV2() {


    const toast = useToast()
    const navigate = useNavigate()



    const currentUser = authFirebase.currentUser

    const PROJECT_ID = 'cupscoop_id'
    const DISPLAY_NAME_USER = 'Muhammad Rifqy Yusuf'
    const CALLBACK_URL = 'https://stage.importir.com/api/callback-custom-va' //ini callback untuk mengubah status paid

    const banks = [
        { name: "BNI", uri: "https://www.xendit.co/wp-content/uploads/2019/11/logo-bni.png" },
        { name: "BCA", uri: "https://www.xendit.co/wp-content/uploads/2019/11/logo-bca.png" },
        { name: "MANDIRI", uri: "https://www.xendit.co/wp-content/uploads/2019/11/logo-mandiri.png" },
        { name: "PERMATA", uri: "https://www.xendit.co/wp-content/uploads/2019/11/logo-permatabank.png" },
        { name: "BRI", uri: "https://www.xendit.co/wp-content/uploads/2019/11/logo-bri.png" }
    ]
    const [modalPayment, setModalPayment] = useState(false)
    const [loading, setLoading] = useState(false)

    const [bankAccount, setBankAccount] = useState('')
    const [bankAccountImage, setBankAccountImage] = useState('')
    const [pricePayment, setPricePayment] = useState(0)

    const [productPayId, setProductPayId] = useState('')
    const [productPayType, setProductPayType] = useState('')
    const [productPaySchedule, setProductPaySchedule] = useState('')

    const [urlDirect, setUrlDirect] = useState('')
    const [paymentActive, setPaymentActive] = useState('')

    const priceData = [

        {
            project_id: 'rifqyganteng',
            product_type: 'product',
            product_schedule: 'UNLIMITED',
            label: 'label A',
            description: 'description apapun itu isi disini',
            price: 1000000
        },


        {
            project_id: 'rifqyganteng',
            product_type: 'subscription',
            product_schedule: 'MONTH',
            label: 'label B',
            description: 'description apapun itu isi disini',
            price: 500000
        },

    ]

    const height = window.innerHeight
    const width = window.innerWidth

    const handleModalPayment = (data) => {
        setModalPayment(true)
        setProductPayId(data.product_id)
        setProductPayType(data.product_type)
        setProductPaySchedule(data.product_schedule)
        setPricePayment(data.price)
    }

    const handleBankActive = (name, image) => {
        setBankAccount(name)
        setBankAccountImage(image)
    }

    const handleCopy = (id) => {
        navigator.clipboard.writeText(id)
        toast({
            title: 'Rifqy Ganteng',
            description: 'Copy to clipboard.',
            status: 'success'
        })
    }


    const handlePayment = async () => {
        setUrlDirect('')
        setPaymentActive('')

        setLoading(true)

        if (productPayType === "product") {
            if (bankAccount !== "") {
                const dataBody = {
                    company: "ESD",
                    external_id: `LMS-${productPayType}-${moment(new Date()).valueOf()}`,
                    bank_code: bankAccount,
                    name: DISPLAY_NAME_USER,
                    expected_amount: Number(pricePayment),
                    callback_url: CALLBACK_URL
                }



                try {
                    const res = await apiPaymentXendit(dataBody)
                    if (res.status === true) {

                        const ref = doc(db, "payments", currentUser.uid);
                        await setDoc(ref, {
                            uid: currentUser.uid,
                            project_id: PROJECT_ID,
                            payment_product: arrayUnion({
                                project_id: PROJECT_ID,
                                product_pay_id: productPayId,
                                product_pay_type: productPayType,
                                name: DISPLAY_NAME_USER,
                                email: currentUser.email,
                                expected_amount: Number(pricePayment),
                                external_id: `LMS-${productPayType}-${moment(new Date()).valueOf()}`,
                                company: 'ESD',
                                bank_code: bankAccount,
                                callback_url: CALLBACK_URL,
                                response_payment: res.data,
                                createdAt: new Date(),
                                bank_code_image: bankAccountImage
                            }),
                            createdAt: new Date()
                        }, { merge: true });
                        toast({
                            title: 'Rifqy Ganteng',
                            description: 'Berhasil membuat invoice pembayaran.',
                            status: 'success'
                        })
                        setPaymentActive(res.data)
                        setLoading(false)
                    }
                } catch (error) {
                    toast({
                        title: 'Rifqy Ganteng',
                        description: error.message,
                        status: 'error'
                    })
                    setLoading(false)
                }
            } else {
                toast({
                    title: 'Rifqy Ganteng',
                    description: 'pilih metode pembayaran terlebih dahulu.',
                    status: 'error'
                })
                setLoading(false)
            }
            setLoading(false)
        }
        if (productPayType === "subscription") {
            const dataBody = {
                company: "ESD",
                prefix: "LMS",
                email: currentUser.email,
                given_names: DISPLAY_NAME_USER,
                surname: DISPLAY_NAME_USER,
                phone: "62882103784410",
                amount: Number(pricePayment),
                schedule: {
                    interval: productPaySchedule,
                    interval_count: 1
                },
                notification_config: {
                    "recurring_created": ["WHATSAPP", "EMAIL"],
                    "recurring_succeeded": ["WHATSAPP", "EMAIL"],
                    "recurring_failed": ["WHATSAPP", "EMAIL"]
                },
                redirect_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                callback_url: CALLBACK_URL
            }



            try {
                const res = await apiPaymentXenditRecurring(dataBody)
                if (res.status === true) {

                    const ref = doc(db, "payments", currentUser.uid);
                    await setDoc(ref, {
                        uid: currentUser.uid,
                        project_id: PROJECT_ID,
                        payment_subscription: arrayUnion({
                            project_id: PROJECT_ID,
                            product_pay_id: productPayId,
                            product_pay_type: productPayType,
                            name: DISPLAY_NAME_USER,
                            email: currentUser.email,
                            expected_amount: Number(pricePayment),
                            external_id: `LMS-${productPayType}-${moment(new Date()).valueOf()}`,
                            company: 'ESD',
                            callback_url: CALLBACK_URL,
                            response_payment: res.data,
                            createdAt: new Date(),
                        }),
                        createdAt: new Date()
                    }, { merge: true });
                    toast({
                        title: 'Rifqy Ganteng',
                        description: 'Berhasil membuat invoice pembayaran.',
                        status: 'success'
                    })
                    setUrlDirect(res?.data?.actions[0]?.url)
                    setLoading(false)
                }
            } catch (error) {
                toast({
                    title: 'Rifqy Ganteng',
                    description: error.message,
                    status: 'error'
                })
                setLoading(false)
            }
            setLoading(false)

        }
        setLoading(false)




    }




    return (
        <Stack p={5}>
            <Stack bgColor={'gray.100'} minH={height} spacing='-10'>
                <Stack pt={20} spacing={10} minH={height / 1.8} alignItems='center' justifyContent={'center'} bg="url(https://images.unsplash.com/photo-1615457938971-3ab61c1c0d57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80) center  fixed" >
                    <Stack alignItems='center' justifyContent={'center'}>
                        <Heading size={'xl'} textAlign='center' color='blackAlpha.900'>Learning Management System</Heading>
                        <Text fontSize={'md'} textAlign='center' color='blackAlpha.700' >berlangganan sekarang !</Text>
                    </Stack>

                    <Stack bgColor={'white'} p={2} borderRadius='xl' borderWidth='medium' borderColor='blue.400'>
                        <Text fontWeight={'bold'} fontSize='sm' color='blue.400'>Quarterly</Text>
                    </Stack>

                </Stack>

                <Stack>
                    {priceData !== null &&
                        <SimpleGrid columns={[1, null, 3]} gap={6} px={6}>
                            {priceData.length > 0 && (
                                priceData.map((x, index) => {
                                    return (

                                        <VStack key={index} bgColor='white' shadow={'base'} borderRadius='lg' spacing={5} p={3}>
                                            <Stack alignItems={'flex-start'} justifyContent='flex-start' w={'100%'} spacing={3}>
                                                <Image w={'30px'} src='https://buildfire.com/wp-content/themes/buildfire/assets/images/plan2@3x.png' alt='https://buildfire.com/wp-content/themes/buildfire/assets/images/plan1@3x.png' />
                                                <Text fontSize={'lg'} fontWeight="bold" color='black'>{x.label}</Text>
                                                <Text fontSize={'sm'} color='black'>{x.description}</Text>
                                                <HStack>
                                                    <Text alignSelf={'flex-start'} color={'black'} fontWeight='bold'>Rp</Text>
                                                    <Heading color={'black'} size='3xl'>{formatFrice(x.price)}</Heading>
                                                    <Text alignSelf={'flex-end'} color={'black'} fontWeight='bold' textTransform={'uppercase'}>{x.product_schedule === 'UNLIMITED' ? ('UNLIMITED') : (`/ ${x.product_schedule}`)}</Text>
                                                </HStack>
                                                <Text fontSize={'sm'} color='black'>Per month billed quarterly.</Text>

                                            </Stack>
                                            <Spacer />
                                            <Stack w={'full'}>
                                                <Button
                                                    fontSize="sm"
                                                    fontWeight="bold"
                                                    size={'sm'}
                                                    color={'white'}
                                                    onClick={currentUser ? (() => handleModalPayment(x)) : (() => navigate('/login'))}
                                                    bgColor={'blue.400'}
                                                >
                                                    {currentUser !== null ? ('Get Started') : ('Login')}
                                                </Button>
                                            </Stack>
                                        </VStack>

                                    )

                                }
                                )
                            )}
                        </SimpleGrid>
                    }
                </Stack>
                {currentUser && (
                    <Modal isOpen={modalPayment} onClose={() => setModalPayment(false)} >
                        <ModalOverlay />
                        <ModalContent >
                            <ModalHeader>Pembayaran</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody >
                                <Stack space={3} m={5}>

                                    <HStack >
                                        <Text fontSize={'sm'} color='gray.700'>Name</Text>
                                        <Spacer />
                                        <Text fontSize={'sm'} color='gray.700'>{DISPLAY_NAME_USER}</Text>
                                    </HStack>

                                    <HStack>
                                        <Text fontSize={'sm'} color='gray.700'>Email</Text>
                                        <Spacer />
                                        <Text fontSize={'sm'} color='gray.700'>{currentUser.email}</Text>
                                    </HStack>

                                    <HStack>
                                        <Text fontSize={'sm'} color='gray.700'>Project ID</Text>
                                        <Spacer />
                                        <Text fontSize={'sm'} color='gray.700'>{PROJECT_ID}</Text>
                                    </HStack>

                                    <HStack>
                                        <Text fontSize={'sm'} color='gray.700'>Product Type</Text>
                                        <Spacer />
                                        <Text fontSize={'sm'} color='gray.700' textTransform={'capitalize'}>{productPayType}</Text>
                                    </HStack>

                                    {
                                        productPayType === "subscription" ? (
                                            <HStack>
                                                <Text fontSize={'sm'} color='gray.700'>Product Schedule</Text>
                                                <Spacer />
                                                <Text fontSize={'sm'} color='gray.700' textTransform={'capitalize'}>1 {productPaySchedule}</Text>

                                            </HStack>

                                        ) : (
                                            <Stack bgColor={'white'} spacing={5} borderRadius='xl' m={2} p={3} shadow={'md'}>
                                                {paymentActive ? (
                                                    <Stack   >
                                                        <HStack w='full' px={5}>
                                                            <Image
                                                                src={
                                                                    bankAccountImage
                                                                }
                                                                alt={bankAccount}
                                                                w="80px"
                                                                borderRadius={'xl'}
                                                            />

                                                            <Spacer />

                                                            <Text fontSize={'sm'}>{paymentActive?.status}</Text>


                                                        </HStack>

                                                        <Box bg='white' px={5}>
                                                            <Text>No. Rekening : </Text>
                                                            <Divider my={2} />
                                                            <Box display='flex' flexDirection='row' justifyContent="space-between">
                                                                <Text fontSize={20} color="gray.500">{paymentActive ? (paymentActive?.account_number) : "none"}</Text>
                                                                <Text color="blue.600" cursor={'pointer'} onClick={() => handleCopy(paymentActive?.account_number)}>SALIN</Text>
                                                            </Box>
                                                            <Divider my={2} />

                                                            <Text fontSize={10} color="gray.600">Proses verifikasi otomatis kurang dari 10 menit setelah pembayaran berhasil</Text>
                                                            <Spacer />
                                                            <Text fontSize={10} color="gray.600">Bayar ke Virtual Account di atas sebelum membuat donasi baru dengan Virtual account agar nomor tetap sama.</Text>
                                                        </Box>
                                                        <Box bg='white' p={5}>
                                                            <Text fontSize={10} color="gray.600">
                                                                Petunjuk Transfer mBanking :
                                                            </Text>
                                                            <Divider />
                                                            <Text fontSize={10} color="gray.600">
                                                                1. Login ke mBanking-mu, pilih BAYAR, kemudian cari penyedia XENDIT
                                                            </Text>
                                                            <Text fontSize={10} color="gray.600">
                                                                2. Masukkan nomor Virtual Account
                                                            </Text>
                                                            <Text fontSize={10} color="gray.600">3. Pastikan nama dan nominal bayar benar</Text>

                                                        </Box>
                                                    </Stack>
                                                ) : (
                                                    <Stack>
                                                        <Text fontSize={'sm'} color='gray.700'>Pilih Metode Pembayaran : </Text>
                                                        <Spacer />
                                                        <Stack>
                                                            <SimpleGrid columns={[2, 2, 3]} gap={3} mb={2} >
                                                                {banks?.map((x, index) => {
                                                                    return (
                                                                        <HStack spacing={3} p={2} borderColor='blue.300' borderRadius={'md'} key={index} borderWidth={bankAccount === x.name ? 1 : 0} alignItems='center' justifyContent={'center'} cursor='pointer' onClick={() => handleBankActive(x.name, x.uri)}>
                                                                            <Image src={x.uri} alt={x.name} w='60px' />
                                                                        </HStack>
                                                                    )
                                                                })}
                                                            </SimpleGrid>
                                                        </Stack>
                                                    </Stack>
                                                )}


                                            </Stack>
                                        )

                                    }
                                    <Divider />

                                    <HStack>
                                        <Text fontSize={'sm'} color='gray.700'>Price</Text>
                                        <Spacer />
                                        <Text fontSize={'md'} color='gray.700' fontWeight={'bold'}>Rp. {formatFrice(pricePayment)}</Text>
                                    </HStack>




                                </Stack>
                            </ModalBody>

                            <ModalFooter>
                                <HStack bg="white" alignItems="center" safeAreaBottom>
                                    <Stack py="1.5" space={1} mx="auto">
                                        <VStack py="0.5" justifyContent="space-between">

                                        </VStack>
                                        {loading ? (
                                            <Stack>
                                                <Spinner />
                                            </Stack>
                                        ) : (
                                            productPayType === 'subscription' ? (
                                                urlDirect === '' ? (
                                                    <Button width="100%" onClick={() => handlePayment()} bg="green.600">
                                                        {/* <Ionicons name="ios-cart-outline" size={25} color="white" /> */}
                                                        Generate Pay
                                                    </Button>
                                                ) : (
                                                    <Link href={urlDirect} isExternal>
                                                        <Button width="100%" bg="green.600">
                                                            {/* <Ionicons name="ios-cart-outline" size={25} color="white" /> */}
                                                            Pay now
                                                        </Button>
                                                    </Link>
                                                )
                                            ) : (
                                                paymentActive === '' && (
                                                    <Button width="100%" onClick={() => handlePayment()} bg="green.600">
                                                        {/* <Ionicons name="ios-cart-outline" size={25} color="white" /> */}
                                                        Generate Pay
                                                    </Button>
                                                )
                                            )
                                        )}

                                    </Stack>
                                </HStack>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                )}

            </Stack>
        </Stack>
    )
}

export default PaymentPageV2