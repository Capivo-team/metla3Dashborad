import React, { useState } from 'react'
import useOutsideClick from '../../hook/UseOutsideClick'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import DropItem from './DropItem'
import { Stack } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Controller from './Controller'
export default function MenuController({ isActiveMenu, setIsActiveMenu }) {
  const handleClickOutside = () => {
    setIsActiveMenu(false)
  }
  const ref = useOutsideClick(handleClickOutside)

  return (
    <Stack ref={ref}>
      <DropItem
        icon={[
          <MenuOpenIcon
            sx={{ color: !isActiveMenu ? 'var(--color-text)' : 'white' }}
          />,
          <MenuIcon
            sx={{ color: !isActiveMenu ? 'var(--color-text)' : 'white' }}
          />,
        ]}
        Children={<Controller/>}
        isActive={isActiveMenu}
        setIsActive={setIsActiveMenu}
      ></DropItem>
    </Stack>
  )
}
