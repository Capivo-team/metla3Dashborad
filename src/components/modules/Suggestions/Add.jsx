import * as React from 'react'
import { Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import Upload from '../../custom/Upload'
import Apiservices from '../../../services/ApiServices'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../../Redux'
import Loading from '../../custom/loading'
import { Input } from '../../custom/inputs'
import { AddButton } from '../../custom/buttons'
import News from '../../../Api/news'
import { Newschema } from '../../../validation/NewsValidation'
import { FromError } from '../../custom/Error'
import Questions from '../../../Api/questions'
import { Questionschema } from '../../../validation/QuestionsValidation'
import Suggestions from '../../../Api/suggestions'
import { Suggestionschema } from '../../../validation/SuggestionsValidation'
export default function Add({ total, setIsDrawerOpen }) {
  const dispatch = useDispatch()
  const Manufacturers = useSelector((state) => state.Manufacturers)

  const [isloading, setIsLoading] = useState(false)

  const [base64Image, setBase64Image] = useState('')

  const { t } = useTranslation()
  const [item, setItem] = useState({
    suggestion: '',
  })
  const [error, setError] = useState('')

  const handelAdd = async () => {
    Suggestionschema.validate(item)
      .then(async () => {
        try {
          setIsLoading(true)
          const newItem = await Suggestions.post(item)

          setIsDrawerOpen(false)
          if (total > Manufacturers.length) {
            dispatch(
              actions.setManufacturers([...Manufacturers, newItem.data.data]),
            )
          }
          setIsLoading(false)

          setItem({
            suggestion: '',
          })
          setBase64Image('')
        } catch (error) {
          setIsLoading(false)
          setError(error.response.data.error) // طباعة الخطأ في وحدة التحكم
        }
      })
      .catch((error) => {
        setIsLoading(false)
        setError(error.message)
      })
  }
  const lang = useSelector((state) => state.lang)

  return (
    <Stack
      position={'relative'}
      dir={lang}
      component={'form'}
      gap={'20px'}
      p={'30px 20px 120px 20px'}
      borderRadius={'20px'}
      width={'100%'}
      height={'100vh'}
      sx={{ overflowY: 'scroll' }}
      onClick={() => setIsDrawerOpen(true)}
    >
      <Stack height={'100vh'} sx={{ overflowY: 'scroll' }}>
        <Stack>
          <label className="col-form-label" htmlFor="nameArabic">
            {t('suggestion')}
          </label>
          <Input
            value={item}
            setValue={setItem}
            type={'text'}
            name={'suggestion'}
          />
          <FromError message={error} name="suggestion" />
        </Stack>
      </Stack>
      <AddButton handelEvent={handelAdd} text="Add" />
      {isloading && <Loading />}
    </Stack>
  )
}
