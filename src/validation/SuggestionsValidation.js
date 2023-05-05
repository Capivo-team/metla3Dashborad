import * as Yup from 'yup'

export const Suggestionschema = Yup.object().shape({
  suggestion: Yup.string().required('Please enter a title'),
})
