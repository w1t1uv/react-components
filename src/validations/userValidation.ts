import * as yup from 'yup';
import { IFile } from '../types';

const nameRules = /( |^)[А-ЯA-Z]/g;
const passwordRules =
  /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{4,}/g;
const supportedFormats = ['image/jpg', 'image/jpeg', 'image/png'];

export const userSchema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRules, { message: 'capitalize the name' })
    .required(),
  age: yup.number().positive('enter a valid age').integer().required(),
  email: yup.string().email('enter a valid email').required(),
  password: yup
    .string()
    .min(4)
    .matches(passwordRules, { message: 'create a stronger password' })
    .required(),
  confirmedPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'passwords must match')
    .required(),
  termsAndConditions: yup.boolean().required('required'),
  image: yup
    .mixed()
    .required()
    .test(
      'size',
      'upload a smaller file',
      (value: IFile) => value && value[0] && value[0].size <= 1024 * 1024
    )
    .test(
      'format',
      'upload a supported file format',
      (value: IFile) =>
        value && value[0] && supportedFormats.includes(value[0].type)
    ),
});
