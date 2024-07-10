import * as yup from 'yup';

export const contactSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  phone: yup.string()
    .matches(/^0[7-9][0-1]\d{8}$/, 'Phone number is not valid')
    .length(11, 'Phone number must be 11 digits')
    .required('Phone number is required'),
  email: yup.string().email('Email is not valid').required('Email is required'),
  addresses: yup.array().of(
    yup.string().required('Address is required')
  ).min(1, 'At least one address is required').max(5, 'No more than 5 addresses are allowed'),
  longitude: yup.string().required('Longitude is required'),
  latitude: yup.string().required('Latitude is required'),
});

