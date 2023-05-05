import * as React from 'react'
import Dialog from '@mui/material/Dialog'

import { Stack, TextField } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Upload from '../../custom/Upload'
import { actions } from '../../../Redux'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../custom/loading'
import { Input } from '../../custom/inputs'
import News from '../../../Api/news'
import { Newschema } from '../../../validation/NewsValidation'
import { FromError } from '../../custom/Error'
import Questions from '../../../Api/questions'
import { Questionschema } from '../../../validation/QuestionsValidation'
export default function Edit({ id, setEle, ele, setIsDrawerOpen }) {
  const [open, setOpen] = React.useState(false)

  const [base64Image, setBase64Image] = useState('')

  const { t } = useTranslation()
  const [item, setItem] = useState(ele)
  const [error, setError] = useState('')

  const [isloading, setIsLoading] = useState(false)
  const handelEdit = async () => {
    Questionschema.validate(item)
      .then(async () => {
        try {
          setIsLoading(true)

          const editNews = await Questions.put(id, item)
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
          <label className="col-form-label">{t('question')}</label>
          <Input
            value={item}
            setValue={setItem}
            type={'text'}
            name={'question'}
          />
          <FromError message={error} name="question" />
        </Stack>
        <div>
          <label className="col-form-label">{t('answer')}</label>
          <Input
            value={item}
            setValue={setItem}
            type={'text'}
            name={'answer'}
          />
          <FromError message={error} name="answer" />
        </div>
      </Stack>

      <button className="addButton" onClick={handelEdit} variant="contained">
        {t('update')}
      </button>
      {isloading && <Loading />}
    </Stack>
  )
}
