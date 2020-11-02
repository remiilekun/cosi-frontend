import React from 'react';
import PropTypes from 'prop-types';
import { FormErrorMessage, FormLabel, FormControl, Select } from '@chakra-ui/core';

export const FormSelect = ({ label, error, name, register, placeholder, inputProps, children, ...props }) => {
  return (
    <FormControl isInvalid={error} mb="1rem" {...props}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Select name={name} placeholder={placeholder} ref={register} {...inputProps}>
        {children}
      </Select>
      <FormErrorMessage>{error && error.message}</FormErrorMessage>
    </FormControl>
  );
};

FormSelect.propTypes = {
  error: PropTypes.any,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputProps: PropTypes.object,
  register: PropTypes.func.isRequired,
};

FormSelect.defaultProps = {
  inputProps: {},
  placeholder: '',
};
