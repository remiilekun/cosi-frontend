import React from 'react';
import PropTypes from 'prop-types';
import { FormErrorMessage, FormLabel, FormControl, Input } from '@chakra-ui/core';

export const FormInput = ({ label, error, name, register, placeholder, inputProps, ...props }) => {
  return (
    <FormControl isInvalid={error} mb="1rem" {...props}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input name={name} placeholder={placeholder} ref={register} {...inputProps} />
      <FormErrorMessage>{error && error.message}</FormErrorMessage>
    </FormControl>
  );
};

FormInput.propTypes = {
  error: PropTypes.any,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputProps: PropTypes.object,
  register: PropTypes.func.isRequired,
};

FormInput.defaultProps = {
  inputProps: {},
  placeholder: '',
};
