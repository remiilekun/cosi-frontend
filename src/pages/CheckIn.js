import React, { useEffect, useState } from 'react';
import { PageTitle } from 'components/atoms';
import { PageWrapper } from 'components/molecules';
import { Button, Checkbox, FormControl, FormErrorMessage, Text } from '@chakra-ui/core';
import queryString from 'query-string';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { countries } from 'data/countries';
import { FormInput, FormSelect, FormDatePicker } from 'components/molecules';
import { checkInSchema } from 'schemas/checkin';
import { useMutation } from 'react-query';
import api from 'services/api';

const CheckIn = ({ location, history }) => {
  const [urlData, setUrlData] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);
  const { register, handleSubmit, errors, control, watch } = useForm({
    resolver: yupResolver(checkInSchema),
  });
  const nationality = watch('nationality');

  const [onCheckIn, { isLoading, error }] = useMutation(api.checkIn, {
    onSuccess: () => {
      history.push({
        pathname: '/check-in-confirmed',
      });
    },
  });

  useEffect(() => {
    const parsed = queryString.parse(location.search);
    setUrlData(parsed);

    if (!parsed.flightNumber || !parsed.lastName) {
      history.push('/');
    }
  }, [history, location.search]);

  const renderOptionsByNationality = () => {
    switch (nationality) {
      case 'austria':
        return (
          <>
            <FormInput
              name="residentialCountry"
              error={errors.residentialCountry}
              register={register}
              label="Residence country"
            />

            <FormInput
              name="residentialCity"
              error={errors.residentialCity}
              register={register}
              label="Residence city"
            />
          </>
        );

      case 'belgium':
        return (
          <>
            <FormDatePicker
              controllerProps={{ defaultValue: new Date() }}
              name="birthDate"
              error={errors.birthDate}
              control={control}
              label="Birth date"
            />

            <FormInput
              name="residentialCountry"
              error={errors.residentialCountry}
              register={register}
              label="Residence country"
            />

            <FormInput
              name="residentialCity"
              error={errors.residentialCity}
              register={register}
              label="Residence city"
            />

            <FormInput
              name="residentialAddress"
              error={errors.residentialAddress}
              register={register}
              label="Residence address"
            />
          </>
        );

      case 'france':
        return (
          <>
            <FormDatePicker
              controllerProps={{ defaultValue: new Date() }}
              name="birthDate"
              error={errors.birthDate}
              control={control}
              label="Birth date"
            />

            <FormInput name="birthPlace" error={errors.birthPlace} register={register} label="Birth place" />

            <FormInput
              name="residentialCountry"
              error={errors.residentialCountry}
              register={register}
              label="Residence country"
            />

            <FormInput
              name="residentialCity"
              error={errors.residentialCity}
              register={register}
              label="Residence city"
            />
          </>
        );

      case 'greece':
        return (
          <>
            <FormDatePicker
              controllerProps={{ defaultValue: new Date() }}
              name="passportIssueDate"
              error={errors.passportIssueDate}
              control={control}
              label="Passport issue date"
            />

            <FormInput
              name="passportIssueCountry"
              error={errors.passportIssueCountry}
              register={register}
              label="Passport issue country"
            />

            <FormInput
              name="passportIssueCity"
              error={errors.passportIssueCity}
              register={register}
              label="Passport issue city"
            />
          </>
        );

      case 'spain':
        return (
          <>
            <FormInput
              name="residentialAddress"
              error={errors.residentialAddress}
              register={register}
              label="Residence address"
            />
          </>
        );

      default:
        return null;
    }
  };

  const onSubmit = async (form) => {
    if (!showConfirm) {
      setShowConfirm(true);
    } else {
      onCheckIn(form);
    }
  };

  return (
    <PageWrapper>
      <PageTitle>{showConfirm ? 'Please review your information' : `Hi, Mr ${urlData?.lastName}!`}</PageTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name="firstName"
          error={errors.firstName}
          register={register}
          label="First name"
          placeholder="John"
        />

        <FormInput
          name="lastName"
          error={errors.lastName}
          register={register}
          label="Last name"
          placeholder="Doe"
          inputProps={{ defaultValue: urlData?.lastName }}
        />

        <FormSelect
          name="nationality"
          error={errors.nationality}
          register={register}
          label="Nationality"
          inputProps={{ defaultValue: '' }}
        >
          <option value="" disabled>
            Select an option
          </option>
          {countries.map((item) => (
            <option value={item.value} key={item.value}>
              {item.label}
            </option>
          ))}
        </FormSelect>

        <FormInput
          name="email"
          error={errors.email}
          register={register}
          label="Email address"
          placeholder="john.doe@email.com"
        />

        <FormInput
          name="phoneNumber"
          error={errors.phoneNumber}
          register={register}
          label="Phone number"
          placeholder="+4404"
        />

        <FormInput
          name="passportNumber"
          error={errors.passportNumber}
          register={register}
          label="Passport number"
          placeholder="128764628"
        />

        {renderOptionsByNationality()}

        {!showConfirm && (
          <FormControl isInvalid={errors.termsAccepted}>
            <Controller
              control={control}
              name="termsAccepted"
              defaultValue={false}
              render={({ onChange, value }) => (
                <Checkbox isChecked={value} onChange={() => onChange(!value)}>
                  Accept Terms and Conditions
                </Checkbox>
              )}
            />
            <FormErrorMessage>{errors.termsAccepted && errors.termsAccepted.message}</FormErrorMessage>
          </FormControl>
        )}

        {error && <Text color="red.400">{error?.response?.data?.error || 'An error occured'}</Text>}

        <Button mt={4} variantColor="teal" type="submit" isLoading={isLoading}>
          Continue
        </Button>
      </form>
    </PageWrapper>
  );
};

export default CheckIn;
