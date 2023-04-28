import { Stack, Typography } from '@mui/material'
import React from 'react'

function Card({ item }) {
  return (
    <Stack
      sx={{
        width: { lg: '21vw', sm: '339px', md: '439px', xs: '100%' },
        height: '170px',
        background: item.background,
        padding: '10px 20px',
        borderRadius: '20px',
        boxShadow:
          'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
      }}
      gap={'40px'}
      // justifyContent={'space-between'}
    >
      <Typography sx={{ fontSize: '16px', fontWeight: '700' }}>
        {item.name}
      </Typography>
      <Stack gap={'15px'} direction={'row'}>
        {item.icon}
        <Stack gap={'8px'}>
          <Stack gap="10px" alignItems={'flex-end'} direction={'row'}>
            <Typography sx={{ fontSize: '24px', fontWeight: '800' }}>
              ${item.number}
            </Typography>
            <Typography
              sx={{ fontSize: '18px', fontWeight: '600', color: item.color }}
            >
              {item.hardNum}
            </Typography>
          </Stack>
          <Typography
            sx={{ fontSize: '14px', color: '#b6b0b0' }}
          >
            Compared to ( ${item.number} last year )
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Card
