import { Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { UserForm } from '../components'
import Loading from '../components/custom/loading'
import { useState } from 'react'

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const [formType, setFormType] = useState(true)
  const handelFormType = () => {
    setFormType(!formType)
    console.log(formType)
  }
  return (
    <Stack
      position={'relative'}
      height={'100vh'}
      sx={{ background: '#1f2027' }}
      justifyContent={'center'}
    >
      <Container
        sx={{ display: 'flex', alignItems: 'center', maxHeight: '80vh' }}
        maxWidth="sm"
      >
        <Stack
          sx={{
            background: 'white',
            padding: '50px 15px',
            borderRadius: '20px',
            maxHeight: '90vh',
            overflow: 'scroll',
          }}
          gap={'35px'}
          width={'100%'}
          alignItems={'center'}
        >
          <img
            style={{ width: formType ? '200px' : '120px' }}
            src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo-700x394.png"
            alt=""
          />
          <Stack gap={'5px'} alignItems={'center'}>
            <Typography
              sx={{
                fontSize: '19px',
                fontWeight: '800',
                color: '#333333',
                textAlign: 'center',
              }}
            >
              Welcome,
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: '400',
                color: '#9fa3a5',
                textAlign: 'center',
              }}
            >
              {formType ? 'Sign in to Continue' : 'Sign up to Continue'}
            </Typography>
          </Stack>
          <UserForm formType={formType} setIsLoading={setIsLoading} />
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <p>
              {formType ? "Don't have an account?" : 'Already have an account?'}
            </p>
            <Button onClick={handelFormType}>
              {formType ? 'Sign Up' : 'Log In'}
            </Button>
          </Stack>
        </Stack>
      </Container>
      {isLoading && <Loading />}
    </Stack>
  )
}