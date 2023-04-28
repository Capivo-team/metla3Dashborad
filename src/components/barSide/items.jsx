import { Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { Logo, ShowMenu } from '../icons'
import { useSelector } from 'react-redux'
import Links from './Links'
import BadgeAvatar from '../header/Avtar'
export default function Items() {
  const [isActive, setIsActive] = useState(true)
  const lang = useSelector((state) => state.lang)
  const user = useSelector((state) => state.user)

  return (
    <Box
      margin={{
        md:
          isActive && lang === 'rtl'
            ? '10px 10px 10px 3%'
            : isActive && lang !== 'rtl'
            ? '10px 20px 10px 10px'
            : !isActive && lang === 'rtl'
            ? '10px 10px 10px 60px'
            : '10px 60px 10px 10px',
        sm:
          isActive && lang === 'rtl'
            ? '10px 10px 10px 5%'
            : isActive && lang !== 'rtl'
            ? '10px 5% 10px 10px'
            : !isActive && lang === 'rtl'
            ? '10px 10px 10px 60px'
            : '10px 60px 10px 10px',
      }}
      height={'100vh'}
      width={{ sm: isActive ? '195px' : 'auto', xs: '100%' }}
      position={'relative'}
    >
      <Stack
        height={{ sm: '97.5vh', xs: '100vh' }}
        width={{ sm: isActive ? '195px' : 'auto', xs: '195px' }}
        sx={{
          background: 'var(--barside-color)',
          borderRadius: { sm: '20px' },
        }}
        position={'fixed'}
        justifyContent={'space-between'}
      >
        <Stack gap="30px" p={'10px'}>
          <Stack
            justifyContent={'space-between'}
            alignItems={'center'}
            direction={'row'}
          >
            {isActive && lang !== 'rtl' ? (
              <Box>
                <img
                  style={{ width: '80px', marginTop: '5px' }}
                  src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo-700x394.png"
                  alt=""
                />{' '}
              </Box>
            ) : isActive && lang === 'rtl' ? (
              <Box sx={{ transform: 'rotateY(180deg)' }}>
                <img
                  style={{ width: '80px', marginTop: '5px' }}
                  src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo-700x394.png"
                  alt=""
                />{' '}
              </Box>
            ) : (
              ''
            )}

            <IconButton
              sx={{
                display: { xs: 'none', sm: 'flex' },

                width: '50px',
                transform:
                  isActive && lang === 'rtl'
                    ? 'rotate(0deg)'
                    : !isActive && lang === 'rtl'
                    ? 'rotate(180deg)'
                    : isActive && lang !== 'rtl'
                    ? 'rotate(180deg)'
                    : '',
                transition: '0.5s linear all ',
              }}
              onClick={() => setIsActive(!isActive)}
            >
              <ShowMenu color={'white'} />
            </IconButton>
          </Stack>
          <Links active={isActive} />
        </Stack>
        <Stack
          direction={'row'}
          gap={isActive && '15px'}
          justifyContent={!isActive && 'center'}
          sx={{
            width: '100%',
            background: '#19191f',
            borderRadius: '0 0 20px 20px',
            padding: '13px',
          }}
        >
          <BadgeAvatar />
          {isActive && (
            <Stack>
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              >
                Admin
              </Typography>
              <Typography sx={{ color: 'white', fontSize: '12px' }}>
                small
              </Typography>
            </Stack>
          )}
        </Stack>
      </Stack>
    </Box>
  )
}
