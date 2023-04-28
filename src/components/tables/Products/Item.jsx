import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import ColorSwitches from './Switch'
import Actions from './Actions'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export default function Item({ e, i, setAction, fn }) {
  const [isDeleted, setIsDeleted] = useState(false)

  const [item, setItem] = useState(e)
  return (
    <>
      {!isDeleted && (
        <>
          <Typography
            onClick={fn}
            minWidth={'40px'}
            sx={{ color: 'var(--color-text)' }}
            align={i === 0 ? 'center' : 'center'}
          >
            {i + 1}
          </Typography>
          <Stack onClick={fn} alignItems={'center'} minWidth={'120px'}>
            <Avatar src={item.imageProduct} alt="" />
          </Stack>
          <Typography
            onClick={fn}
            width={'120px'}
            sx={{ color: 'var(--color-text)' }}
            align={i === 0 ? 'center' : 'center'}
          >
            {item.nameAR}
          </Typography>
          <Typography
            onClick={fn}
            width={'120px'}
            sx={{ color: 'var(--color-text)' }}
            align={i === 0 ? 'center' : 'center'}
          >
            {item.nameEN}
          </Typography>
          <Typography
            onClick={fn}
            width={'120px'}
            sx={{ color: 'var(--color-text)' }}
            align={i === 0 ? 'center' : 'center'}
          >
            {item.descriptionEN && item.descriptionEN.slice(0, 5)}...
          </Typography>{' '}
          <Typography
            onClick={fn}
            width={'120px'}
            sx={{ color: 'var(--color-text)' }}
            align={i === 0 ? 'center' : 'center'}
          >
            {item.quantity}
          </Typography>{' '}
          <Typography
            onClick={fn}
            width={'120px'}
            sx={{ color: 'var(--color-text)' }}
            align={i === 0 ? 'center' : 'center'}
          >
            {item.price}
          </Typography>
          <Actions
            fn={fn}
            setAction={setAction}
            setIsDeleted={setIsDeleted}
            setItem={setItem}
            item={item}
          />
        </>
      )}
    </>
  )
}
