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
export default function Add({ total, setIsDrawerOpen }) {
  const dispatch = useDispatch()
  const Manufacturers = useSelector((state) => state.Manufacturers)

  const [isloading, setIsLoading] = useState(false)

  const [base64Image, setBase64Image] = useState('')

  const { t } = useTranslation()
  const [item, setItem] = useState({
    title: '',
    description: '',
  })
  const [error, setError] = useState('')

  const handelAdd = async () => {
    if (!base64Image) {
      setError('add image!')
    } else {
      Newschema.validate(item)
        .then(async () => {
          try {
            setIsLoading(true)
            const requestBody = new FormData()
            requestBody.append('title', item.title)
            requestBody.append('description', item.description)
            requestBody.append('image', base64Image)
            setIsLoading(true)
            const newItem = await News.post(requestBody)

            setIsDrawerOpen(false)
            if (total > Manufacturers.length) {
              dispatch(
                actions.setManufacturers([...Manufacturers, newItem.data.data]),
              )
            }
            setIsLoading(false)

            setItem({
              title: '',
              description: '',
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
          <label className="col-form-label" htmlFor="nameEnglish">
            {t('title')}
          </label>
          <Input value={item} setValue={setItem} type={'text'} name={'title'} />
          <FromError message={error} name="title" />
        </Stack>
        <Stack>
          <label className="col-form-label" htmlFor="nameArabic">
            {t('description')}
          </label>
          <Input
            value={item}
            setValue={setItem}
            type={'text'}
            name={'description'}
          />
          <FromError message={error} name="description" />

          <Stack mt="35px">
            <Upload base64Image={base64Image} setBase64Image={setBase64Image} />
          </Stack>
          <FromError message={error} name="image" />
        </Stack>
      </Stack>
      <AddButton handelEvent={handelAdd} text="Add" />
      {isloading && <Loading />}
    </Stack>
  )
}
