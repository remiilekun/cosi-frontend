import * as yup from 'yup';

export const checkInSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  nationality: yup.string().required('Nationality is required'),
  email: yup.string().email('Invalid email address').required('Email address is required'),
  phoneNumber: yup.string().required('Phone number is required'),
  passportNumber: yup.string().required('Passport number is required'),

  termsAccepted: yup.bool().oneOf([true], 'Kindly accept terms and conditions'),

  residentialCountry: yup.string().when('nationality', {
    is: (val) => ['austria', 'belgium', 'france'].includes(val),
    then: yup.string().required('Residential country is required'),
  }),
  residentialCity: yup.string().when('nationality', {
    is: (val) => ['austria', 'belgium', 'france'].includes(val),
    then: yup.string().required('Residential city is required'),
  }),
  residentialAddress: yup.string().when('nationality', {
    is: (val) => ['belgium', 'spain'].includes(val),
    then: yup.string().required('Residential address is required'),
  }),
  birthDate: yup.date().when('nationality', {
    is: (val) => ['belgium', 'france'].includes(val),
    then: yup.date().required('Birthdate is required'),
  }),
  birthPlace: yup.string().when('nationality', {
    is: 'france',
    then: yup.string().required('Birth place is required'),
  }),
  passportIssueCountry: yup.string().when('nationality', {
    is: 'greece',
    then: yup.string().required('Passport issue country is required'),
  }),
  passportIssueCity: yup.string().when('nationality', {
    is: 'greece',
    then: yup.string().required('Passport issue city is required'),
  }),
  passportIssueDate: yup.date().when('nationality', {
    is: 'greece',
    then: yup.date().required('Passport issue date is required'),
  }),
});
