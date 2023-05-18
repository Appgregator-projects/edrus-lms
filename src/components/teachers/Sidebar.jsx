import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Circle,
} from '@chakra-ui/react';
import { FiHome, FiMenu } from 'react-icons/fi';
import { RiFileList2Line } from 'react-icons/ri';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import {
  BsDoorOpenFill,
  BsBook,
  BsFileCheck,
  BsEnvelope,
} from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { FaTasks } from 'react-icons/fa';
import { AiOutlineSnippets } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: FiHome, link: '/teacher/dashboard' },
  { name: 'Course', icon: BsBook, link: '/teacher/courses' },
  { name: 'Lessons', icon: AiOutlineSnippets, link: '/teacher/sections' },
  { name: 'Lessons', icon: RiFileList2Line, link: '/teacher/lessons' },
  { name: 'Assignment', icon: FaTasks, link: '/teacher/assignment' },
  { name: 'Quiz', icon: BsFileCheck, link: '/teacher/quiz' },
  { name: 'Logout', icon: BsDoorOpenFill, link: '/login' },
];

export default function Sidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('white')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const navigate = useNavigate();
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <Image
            src="https://demo.learndash.com/wp-content/uploads/2022/04/learndash-demo-logo-1.svg"
            alt="img-logo"
          />
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map(link => (
        <NavItem
          key={link.name}
          icon={link.icon}
          onClick={() => navigate(`${link.link}`)}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const navigate = useNavigate();

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="right"
      {...rest}
      gap="5"
    >
      <Flex gap="1" onClick={() => navigate('/teacher/inbox')} cursor="pointer">
        <BsEnvelope fontSize="20px" />
        <sup>
          <Text>1</Text>
        </sup>
      </Flex>
      <Popover islazy trigger={'hover'}>
        <PopoverTrigger>
          <Link>Hi, User1</Link>
        </PopoverTrigger>
        <PopoverContent bgColor="#2c698d" w="100%" color="white">
          <PopoverArrow bgColor="#2c698d" />
          <PopoverBody>
            <Link onClick={() => navigate('/login')}>Log Out</Link>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Flex>
  );
};
