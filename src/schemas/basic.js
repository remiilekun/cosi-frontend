import * as yup from 'yup';

export const basicSchema = yup.object().shape({
  flightNumber: yup
    .string()
    .matches(/^\d+$/, 'Flight number should contain only numbers')
    .required('Flight number is required'),
  lastName: yup.string().required('Last Name is required'),
});
