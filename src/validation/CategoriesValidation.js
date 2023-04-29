import * as Yup from 'yup'

export const Categoriesschema = Yup.object().shape({
  name: Yup.string().required('Please enter a name'),
})
