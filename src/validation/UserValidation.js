import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const phoneRules = /^\+?[1-9]\d{1,14}$/;
// min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const signupSchema = yup.object().shape({
  fullName: yup.string().required('Full name is Required'),
  phoneNumber: yup
    .string()
    .matches(phoneRules, 'Please enter a valid phone number')
    .required('Phone number is required'),
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: 'Please create a stronger password' })
    .required('Password is Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is Required'),
});

export const loginSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .matches(phoneRules, 'Please enter a valid phone number')
    .required('Phone number is required'),
  password: yup
    .string()
    .min(6)
    .required('Password is Required'),
});
