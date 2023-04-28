import { Stack } from '@mui/material'
import React from 'react'
import Items from './items'

export default function BarSideForDisktop() {
  return (
    <Stack display={{xs:'none',sm:'block'}}>
      <Items/>
    </Stack>
  )
}
