import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import ColorSwitches from './Switch'
import Actions from './Actions'
import Item from './Item'
import { useSelector } from 'react-redux'
import PopUpDetails from './DetailsItem'

export default function TestTable() {
  const Manufacturers = useSelector((state) => state.Manufacturers)

  return (
    <Stack height={'350px'} overflow={'scroll'}>
      {Manufacturers && Manufacturers.map((e, i) => <PopUpDetails e={e} i={i}/>)}
    </Stack>
  )
}
