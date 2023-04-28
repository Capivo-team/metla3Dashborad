import { IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { Sun, Moon, Ball } from '../icons'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../Redux'
import BadgeAvatar from './Avtar'
import LangugeServices from '../../services/LangugeServices'
import { useTranslation } from 'react-i18next'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import JwtService from '../../services/TokenServices'
export default function Controller() {
  const dispatch = useDispatch()
  const mode = useSelector((state) => state.mode)
  const lang = useSelector((state) => state.lang)
  const user = useSelector((state) => state.user)
  const { t, i18n } = useTranslation()

  const handelMode = () => {
    dispatch(actions.changeMode())
  }
  const handelLang = () => {
    LangugeServices.setLang(LangugeServices.getLang() === 'en' ? 'ar' : 'en')
    dispatch(actions.changeLang(lang === 'rtl' ? 'ltr' : 'rtl'))
    i18n.changeLanguage(LangugeServices.getLang() !== 'en' ? 'ar' : 'en')
  }
  return (
    <Stack flexWrap={'wrap'} gap={'20px'} direction={'row'}>
      <IconButton
        sx={{
          width: '40px',
          background: { xs: 'var(--background-btn)' },
          borderRadius: '18px',
        }}
        onClick={handelMode}
      >
        {!mode ? <Sun /> : <Moon />}
      </IconButton>
      <IconButton
        sx={{
          width: '40px',
          background: { xs: 'var(--background-btn)' },
          borderRadius: '18px',
        }}
        onClick={handelLang}
      >
        {lang !== 'rtl' ? (
          <img
            style={{ width: '100%' }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Palestine_Flag.svg/1280px-Palestine_Flag.svg.png"
          />
        ) : (
          <img
            style={{ width: '100%' }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/1200px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png"
          />
        )}
      </IconButton>
      <IconButton
        sx={{
          width: '40px',
          background: { xs: 'var(--background-btn)' },
          borderRadius: '18px',
        }}
      >
        <Ball />
      </IconButton>
      <IconButton
        onClick={() => {
          JwtService.destroyToken()
          dispatch(actions.login(null))
        }}
        sx={{
          width: '40px',
          background: { xs: 'var(--background-btn)', color: 'red' },
          borderRadius: '18px',
        }}
      >
        <PowerSettingsNewIcon />
      </IconButton>
      <Stack>
        <Typography
          sx={{
            color: 'var(--color-text)',
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        >
          Admin
        </Typography>
        <Typography sx={{ color: 'var(--color-text)', fontSize: '12px' }}>
          Admin
        </Typography>
      </Stack>
      <BadgeAvatar />
    </Stack>
  )
}
