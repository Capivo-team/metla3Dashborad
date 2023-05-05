import * as React from 'react'
import { Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import Upload from '../../custom/Upload'
import UploadVideo from '../../custom/UploadVideo'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../../Redux'
import Loading from '../../custom/loading'
import { Input } from '../../custom/inputs'
import { AddButton } from '../../custom/buttons'
import News from '../../../Api/news'
import { Newschema } from '../../../validation/NewsValidation'
import { FromError } from '../../custom/Error'
import Category from '../../../Api/category'
import { Vidupschema } from '../../../validation/ViduoValidation'
import Videos from '../../../Api/videos'
export default function Add({ total, setIsDrawerOpen }) {
  const dispatch = useDispatch()
  const Manufacturers = useSelector((state) => state.Manufacturers)

  const [isloading, setIsLoading] = useState(false)

  const [base64Image, setBase64Image] = useState('')

  const { t } = useTranslation()
  const [item, setItem] = useState({
    title: '',
  })
  const [error, setError] = useState('')
  const [video, setVideo] = useState('')

  const handelAdd = async () => {
    if (!base64Image) {
      setError('add image!')
    } else {
      Vidupschema.validate(item)
        .then(async () => {
          try {
            setIsLoading(true)
            const requestBody = new FormData()
            requestBody.append('title', item.title)
            requestBody.append('image', base64Image)
            requestBody.append('video', video)
            setIsLoading(true)
            const newItem = await Videos.post(requestBody)

            setIsDrawerOpen(false)
            if (total > Manufacturers.length) {
              dispatch(
                actions.setManufacturers([...Manufacturers, newItem.data.data]),
              )
            }
            setIsLoading(false)

            setItem({
              title: '',
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
          <Stack mt="35px">
            <Upload base64Image={base64Image} setBase64Image={setBase64Image} />
          </Stack>
          <FromError message={error} name="image" />
        </Stack>
        <Stack>
          <Stack mt="35px">
            <UploadVideo base64Image={video} setBase64Image={setVideo} />
          </Stack>
          <FromError message={error} name="image" />
        </Stack>
      </Stack>
      <AddButton handelEvent={handelAdd} text="Add" />
      {isloading && <Loading />}
    </Stack>
  )
}
