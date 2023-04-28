import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import ColorSwitches from './Switch'
import Actions from './Actions'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export default function Item({ e, i }) {
  const [isDeleted, setIsDeleted] = useState(false)

  const [item, setItem] = useState(e)
  return (
    <>
      {!isDeleted && (
        <Stack
          sx={{
            background:
              i % 2 === 0
                ? 'var(--background-table)'
                : 'var(--background-table-main-row)',
            padding: '13px',
            borderRadius: '12px',
          }}
          // mt={'20px'}
          alignItems={'center'}
          justifyContent={'space-between'}
          direction={'row'}
          key={i}
        >
          <Typography
            minWidth={'40px'}
            sx={{ color: 'var(--color-text)' }}
            align={i === 0 ? 'center' : 'center'}
          >
            {i + 1}
          </Typography>
          <Stack alignItems={'center'} minWidth={'150px'}>
            <Avatar src={item.logo} alt="" />
          </Stack>
          <Typography
            width={'150px'}
            sx={{ color: 'var(--color-text)' }}
            align={i === 0 ? 'center' : 'center'}
          >
            {item.nameAR}
          </Typography>

          <Typography
            width={'150px'}
            sx={{ color: 'var(--color-text)' }}
            align={i === 0 ? 'center' : 'center'}
          >
            {item.nameEN}
          </Typography>  <Typography
            width={'150px'}
            sx={{ color: 'var(--color-text)' }}
            align={i === 0 ? 'center' : 'center'}
          >
            {item.address}
          </Typography>
         

          <Actions setIsDeleted={setIsDeleted} setItem={setItem} item={item} />
        </Stack>
      )}
    </>
  )
}
