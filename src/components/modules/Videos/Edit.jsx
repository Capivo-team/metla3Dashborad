import * as React from 'react'
import Dialog from '@mui/material/Dialog'

import { Stack } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Upload from '../../custom/Upload'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../custom/loading'
import { Input } from '../../custom/inputs'
import { FromError } from '../../custom/Error'
import { Categoriesschema } from '../../../validation/CategoriesValidation'
import Category from '../../../Api/category'
import UploadVideo from '../../custom/UploadVideo'
import { Vidupschema } from '../../../validation/ViduoValidation'
import Videos from '../../../Api/videos'

export default function Edit({ id, setEle, ele, setIsDrawerOpen }) {
  const [open, setOpen] = React.useState(false)

  const [base64Image, setBase64Image] = useState('')
  const [video, setVideo] = useState('')

  const { t } = useTranslation()
  const [item, setItem] = useState(ele)
  const [error, setError] = useState('')

  const [isloading, setIsLoading] = useState(false)
  const handelEdit = async () => {
    Vidupschema.validate(item)
      .then(async () => {
        try {
          setIsLoading(true)

          const requestBody = new FormData()
          requestBody.append('title', item.title)
          requestBody.append('image', base64Image)
          requestBody.append('video', video)
          const editNews = await Videos.put(id, requestBody)
          setEle(editNews.data.data)
          setIsLoading(false)
          setIsDrawerOpen(false)
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
          <label style={{ textAlign: 'start' }} className="col-form-label">
            {t('title')}
          </label>
          <Input value={item} setValue={setItem} type={'text'} name={'title'} />
          <FromError message={error} name="title" />
        </Stack>

        <Stack gap={'20px'} margin={'20px 0'}>
          {!base64Image && (
            <img
              style={{ width: '80px', height: '80px', borderRadius: '12px' }}
              src={item.image || item.logo}
              alt=""
            />
          )}

          <Upload base64Image={base64Image} setBase64Image={setBase64Image} />
        </Stack>
        <Stack>
          <Stack mt="35px">
            {!video && (
              <video
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '12px',
                  marginBottom: '20px',
                }}
                controls
                src={item.video}
              ></video>
            )}

            <UploadVideo base64Image={video} setBase64Image={setVideo} />
          </Stack>
          <FromError message={error} name="image" />
        </Stack>
      </Stack>

      <button className="addButton" onClick={handelEdit} variant="contained">
        {t('update')}
      </button>
      {isloading && <Loading />}
    </Stack>
  )
}
