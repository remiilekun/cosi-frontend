import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { FormErrorMessage, FormLabel, FormControl, Input, Box } from '@chakra-ui/core';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from '@emotion/styled';

const PickerWrapper = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }
`;

export const FormDatePicker = ({ label, error, name, control, controllerProps, ...props }) => {
  return (
    <FormControl isInvalid={error} mb="1rem" {...props}>
      <FormLabel htmlFor={name}>{label}</FormLabel>

      <Controller
        control={control}
        render={({ onChange, value }) => (
          <PickerWrapper>
            <Input as={DatePicker} selected={value} onChange={(date) => onChange(date)} />
          </PickerWrapper>
        )}
        name={name}
        {...controllerProps}
      />

      <FormErrorMessage>{error && error.message}</FormErrorMessage>
    </FormControl>
  );
};

FormDatePicker.propTypes = {
  control: PropTypes.func.isRequired,
  error: PropTypes.any,
  controllerProps: PropTypes.object,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

FormDatePicker.defaultProps = {
  inputProps: {},
  placeholder: '',
};
