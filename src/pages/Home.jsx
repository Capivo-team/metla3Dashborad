import { Stack } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, BarSide } from '../components/index'
import { useSelector } from 'react-redux'
export default function Home() {
  const isStacky = useSelector((e) => e.isStacky)
  console.log(isStacky, 111111111111111111111)
  return (
    <Stack
      width={'100%'}
      height={isStacky !== 1 ? '100%' : '100vh'}
      sx={{
        overflowX: 'hidden',
        overflowY: isStacky === 1 && 'hidden',
      }}
      direction={'row'}
    >
      <BarSide />
      <Stack
        sx={{ overflowX: 'hidden' }}
        m={{ sm: '13px 20.5px' }}
        width={'100%'}
      >
        <Header />
        <Stack mt={'100px'}>
          <Outlet />
        </Stack>
      </Stack>
    </Stack>
  )
}
