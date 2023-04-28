import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import theme from './helpers/theme'
import { useDispatch, useSelector } from 'react-redux'

import { Box, CircularProgress, Stack } from '@mui/material'
import Home from './pages/Home'
import { useEffect, useState } from 'react'
import Login from './pages/Login'
import JwtService from './services/TokenServices'
import { actions } from './Redux'
import LangugeServices from './services/LangugeServices'
import { useTranslation } from 'react-i18next'

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const mode = useSelector((state) => state.mode)
  const user = useSelector((state) => state.user)
  const lang = useSelector((state) => state.lang)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    if (JwtService.getToken()) {
      console.log('login')
      dispatch(actions.login('user'))
    }
    if (LangugeServices.getLang()) {
      dispatch(
        actions.changeLang(LangugeServices.getLang() === 'en' ? 'ltr' : 'rtl'),
      )
      i18n.changeLanguage(LangugeServices.getLang())
    }
    setLoading(false)
  }, [])
  useEffect(() => {
    const body = document.querySelector('body')
    if (mode) {
      body.classList.add('dark')
    } else {
      body.classList.remove('dark')
    }
  }, [mode])

  if (loading) {
    return (
      <Stack
        alignItems={'center'}
        justifyContent={'center'}
        width="100vw"
        height={'100vh'}
      >
        <CircularProgress />
      </Stack>
    )
  }

  return (
    <Box dir={lang} className={'App'}>
      <ThemeProvider theme={theme}>
        {loading ? (
          <Stack
            alignItems={'center'}
            justifyContent={'center'}
            width="100vw"
            height={'100vh'}
          >
            <CircularProgress />
          </Stack>
        ) : user ? (
          <Home />
        ) : (
          <Login />
        )}
      </ThemeProvider>
    </Box>
  )
}

export default App
