import * as Yup from 'yup'

export const Offersschema = Yup.object().shape({
  offerName: Yup.string().required('Please enter a name'),
  description: Yup.string().required('Please enter a description'),
})
