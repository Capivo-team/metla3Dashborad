import { useState } from 'react'
import { Stack } from '@mui/system'
import Button from '@mui/material/Button'
import Apiservices from '../../services/ApiServices'
import { useDispatch } from 'react-redux'
import { actions } from '../../Redux'
import JwtService from '../../services/TokenServices'
import { useTranslation } from 'react-i18next'
import LangugeServices from '../../services/LangugeServices'
import { InputWithLabel } from '../custom/inputs'
import { FromError } from '../custom/Error'
import { loginSchema } from '../../validation/UserValidation'
import Signs from '../../Api/sign'

function LoginForm({ setIsLoading }) {
  const [error, setError] = useState('')

  const i = {
    phoneNumber: '1234567890',
    password: '123456',
  }
  const [login, setLogin] = useState(i)
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const handelLogin = async (e) => {
    e.preventDefault()
    loginSchema
      .validate({ ...login })
      .then(async () => {
        try {
          setIsLoading(true)
          const user = await Signs.login(login)
          dispatch(actions.login(user.data.data))
          setLogin(login)
          setIsLoading(false)
          JwtService.setToken(user.data.token)
          LangugeServices.setLang('en')
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
  return (
    <>
      <form
        className="login"
        onSubmit={handelLogin}
        style={{ width: '100%' }}
        action=""
      >
        <Stack className="login-form" gap={'20px'}>
          <Stack sx={{ padding: '5px 25px 5px 15px' }}>
            <InputWithLabel
              value={login}
              setValue={setLogin}
              name={'phoneNumber'}
              type="text"
              labelText="Number Phone"
              required
            />
            <FromError message={error} name="phone" />
          </Stack>
          <Stack sx={{ padding: '5px 25px 5px 15px' }}>
            <InputWithLabel
              value={login}
              setValue={setLogin}
              name={'password'}
              type="password"
              labelText="password"
              required
            />
            <FromError message={error} name="password" />
          </Stack>

          <Button
            type="submit"
            sx={{
              padding: '12px',
              borderRadius: '16px',
              background: '#ffcf51 !important',
              color: '#282626',
              fontWeight: '600',
              fontSize: '16px',
              textTransform: 'capitalize',
            }}
            variant="contained"
          >
            Continue
          </Button>
        </Stack>
      </form>
    </>
  )
}

export default LoginForm
