import { IconButton, Stack } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import SwipeableTemporaryDrawer from '../barSide/Drower'
import { useState } from 'react'
import DropItem from './DropItem'
import useOutsideClick from '../../hook/UseOutsideClick'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

import Search from './Search'
import MenuController from './MenuController'
export default function HeaderForMobail() {
  const lang = useSelector((state) => state.lang)
  const [isActive, setIsActive] = useState(false)
  const handleClickOutside = () => {
    setIsActive(false)
  }
  const [isActiveMenu, setIsActiveMenu] = useState(false)

  const ref = useOutsideClick(handleClickOutside)

  return (
    <Stack
      // position={'fixed'}
      display={{ sm: 'none' }}
      zIndex={'1000'}
      sx={{
        width: '100vw',
        height: isActive || isActiveMenu ? '100vh' : '60px',
        background: 'var(--blur-color)',
        backdropFilter: '(5px)',
      }}
    >
      <Stack width="100%">
        <Stack
          dir={lang}
          p={'10px'}
          width={'100%'}
          sx={{ background: 'var(--main-color)' }}
          position={'relative'}
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Stack gap={'18px'} alignItems={'center'} direction={'row'}>
            <SwipeableTemporaryDrawer />
            <Stack ref={ref}>
              <DropItem
                icon={[
                  <MoreHorizIcon
                    sx={{ color: !isActive ? 'var(--color-text)' : 'white' }}
                  />,
                ]}
                Children={<Search />}
                isActive={isActive}
                setIsActive={setIsActive}
              ></DropItem>
            </Stack>
          </Stack>
          <MenuController
            isActiveMenu={isActiveMenu}
            setIsActiveMenu={setIsActiveMenu}
          />
        </Stack>
      </Stack>
    </Stack>
  )
}
