import { Stack } from '@mui/material'
import React from 'react'
import Search from './Search'
import Controller from './Controller'

export default function HeaderForDisktop() {
  return (
    <Stack
      display={{ xs: 'none', sm: 'flex' }}
      position={'sticky'}
      top={'0px'}
      p="10px"
      width={{ md: '100%' }}
      sx={{
        background: 'var(--main-color)',
        borderRadius: '20px',
        boxShadow: '0 1.6rem 3rem rgba(0,0,0,.1)',
      }}
      direction={'row'}
      justifyContent={'space-between'}
    >
      <Search />
      <Controller />
    </Stack>
  )
}
