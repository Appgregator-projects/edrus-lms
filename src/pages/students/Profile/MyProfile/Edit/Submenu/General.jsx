import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

const General = () => {
  return (
    <>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl>
        <FormLabel>From</FormLabel>
        <Input type="text" />
      </FormControl>
    </>
  );
};

export default General;
