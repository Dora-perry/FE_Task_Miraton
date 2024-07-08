import * as yup from 'yup';

export const contactSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  phone: yup.string().matches(/^\+?[1-9]\d{1,14}$/, 'Phone number is not valid').required('Phone number is required'),
  email: yup.string().email('Email is not valid').required('Email is required'),
  addresses: yup.array().of(yup.string().required('Address is required')).min(1).max(5),
});
