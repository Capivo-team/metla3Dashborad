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
import { signupSchema } from '../../validation/UserValidation'
import Signs from '../../Api/sign'

const SignupForm = ({ setIsLoading }) => {
  const [error, setError] = useState('')
  const [signup, setSignup] = useState({})

  const { t } = useTranslation()
  const dispatch = useDispatch()

  const handelRegister = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    signupSchema
      .validate(signup)
      .then(async (value) => {
        try {
          const user = await Signs.signup(signup)
          LangugeServices.setLang('en')
          console.log(user)
          JwtService.setToken(user.data.token)
          setSignup(signup)
          setIsLoading(false)
          console.log(user)
          setError('')
          dispatch(actions.register(user.data.data))
        } catch (error) {
          setIsLoading(false)

          setError(error.response.data.error) // طباعة الخطأ في وحدة التحكم
        }
      })
      .catch((error) => {
        setIsLoading(false)

        console.log(error.message)

        setError(error.message)
      })
  }
  return (
    <>
      <form onSubmit={handelRegister} style={{ width: '100%' }} action="">
        <Stack gap={'20px'}>
          <Stack sx={{ padding: '5px 25px 5px 15px' }}>
            <InputWithLabel
              value={signup}
              setValue={setSignup}
              name={'name'}
              type="text"
              labelText="Full Name"
              required
            />
            <FromError message={error} name="name" />
          </Stack>
          <Stack sx={{ padding: '5px 25px 5px 15px' }}>
            <InputWithLabel
              value={signup}
              setValue={setSignup}
              name={'phoneNumber'}
              type="text"
              labelText="Number Phone"
              required
            />
            <FromError message={error} name="number" />
          </Stack>
          <Stack sx={{ padding: '5px 25px 5px 15px' }}>
            <InputWithLabel
              value={signup}
              setValue={setSignup}
              name={'password'}
              type="password"
              labelText="password"
              required
            />
            <FromError message={error} name="stronger" />
          </Stack>
          <Stack sx={{ padding: '5px 25px 5px 15px' }}>
            <InputWithLabel
              value={signup}
              setValue={setSignup}
              name={'confirmPassword'}
              type="password"
              labelText="confirm password"
              required
            />
            <FromError message={error} name="match" />
            <FromError message={error} name="Confirm " />
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

export default SignupForm
