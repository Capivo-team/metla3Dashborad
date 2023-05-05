import * as Yup from 'yup'

export const Questionschema = Yup.object().shape({
  question: Yup.string().required('Please enter a title'),
  answer: Yup.string().required('Please enter a description'),
})
