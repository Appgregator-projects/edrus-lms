import React from 'react';
import Header from '../../../../../components/students/Header';
import Footer from '../../../../../components/students/Footer';

import SidebarEdit from './SidebarEdit';
import { Flex, Grid, GridItem } from '@chakra-ui/react';

import ChangePassword from './Submenu/ChangePassword';
const EditProfile = () => {
  return (
    <>
      <Header />
      <Flex minH="71.8vh" align="center">
        <Grid templateColumns="100% 100%" gap="6">
          <GridItem>
            <SidebarEdit />
          </GridItem>
          <GridItem border="1px solid black">
            <ChangePassword />
          </GridItem>
        </Grid>
      </Flex>
      <Footer />
    </>
  );
};

export default EditProfile;
