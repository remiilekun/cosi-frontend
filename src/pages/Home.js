import React from 'react';
import { PageTitle } from 'components/atoms';
import { PageWrapper } from 'components/molecules';
import { Button } from '@chakra-ui/core';
import queryString from 'query-string';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormInput } from 'components/molecules';

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
      search: `?${queryString.stringify(data)}`,
    });
  };

  return (
    <PageWrapper>
      <PageTitle>Welcome to your web check-in</PageTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name="flightNumber"
          error={errors.flightNumber}
          register={register}
          label="Flight number"
          placeholder="09872641"
        />

        <FormInput name="lastName" error={errors.lastName} register={register} label="Last name" placeholder="Doe" />

        <Button mt={4} variantColor="teal" type="submit">
          Submit
        </Button>
      </form>
    </PageWrapper>
  );
};

export default Home;
