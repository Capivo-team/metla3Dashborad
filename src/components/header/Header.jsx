import { Stack } from '@mui/material'
import React from 'react'
import HeaderForDisktop from './HeaderForDisktop'
import HeaderForMobail from './HeaderForMobail'
import { useSelector } from 'react-redux'

export default function Header() {
  const isStacky = useSelector((e) => e.isStacky)
  return (
    <Stack
      position="fixed"
      width={{ sm: 'calc(100vw - 280px)', xs: '100%' }}
      zIndex={isStacky}
      top={{ xs: '0', sm: '15px' }}
      sx={{ boxSizing: 'border-box' }}
    >
      <HeaderForDisktop />
      <HeaderForMobail />
    </Stack>
  )
}
