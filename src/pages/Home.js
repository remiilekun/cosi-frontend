import React from 'react';
import { PageTitle } from 'components/atoms';
import { PageWrapper } from 'components/molecules';
import { FormErrorMessage, FormLabel, FormControl, Input, Button } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { objectToQueryString } from 'lib/utils';

const schema = yup.object().shape({
  flightNumber: yup
    .string()
    .matches(/^\d+$/, 'Flight number should contain only numbers')
    .required('Flight number is required'),
  lastName: yup.string().required('Last Name is required'),
});

const Home = ({ history }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    history.push({
      pathname: '/check-in',
      search: `?${objectToQueryString(data)}`,
    });
  };

  return (
    <PageWrapper>
      <PageTitle>Welcome to your web check-in</PageTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.flightNumber} mb="1rem">
          <FormLabel htmlFor="flightNumber">Flight number</FormLabel>
          <Input name="flightNumber" placeholder="09872641" ref={register} />
          <FormErrorMessage>{errors.flightNumber && errors.flightNumber.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.lastName}>
          <FormLabel htmlFor="lastName">Last name</FormLabel>
          <Input name="lastName" placeholder="Doe" ref={register} />
          <FormErrorMessage>{errors.lastName && errors.lastName.message}</FormErrorMessage>
        </FormControl>

        <Button mt={4} variantColor="teal" type="submit">
          Submit
        </Button>
      </form>
    </PageWrapper>
  );
};

export default Home;
