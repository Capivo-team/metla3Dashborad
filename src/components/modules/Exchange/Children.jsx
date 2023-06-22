import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Children({ item }) {
  const lang = useSelector((e) => e.lang)
  return (
    <Stack dir={lang}>
      <Stack alignItems={'center'} direction={'row'} gap="15px" p="20px">
        <Avatar src={item.image} />
        <Typography
          sx={{
            color: 'var(--color-text)',
            fontSize: '20px',
            fontWeight: '600',
          }}
        >
          {item.title}
        </Typography>
      </Stack>

      <Typography
        sx={{
          color: 'var(--color-text)',
          fontSize: '16px',
          fontWeight: '400',
          background: 'var(--background-table-main-row)',
          padding: '20px',
          marginBottom: '40px',
        }}
      >
        {item.description}
      </Typography>
    </Stack>
  )
}
//
