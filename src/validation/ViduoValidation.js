import * as Yup from 'yup'

export const Vidupschema = Yup.object().shape({
  title: Yup.string().required('Please enter a name'),
})
