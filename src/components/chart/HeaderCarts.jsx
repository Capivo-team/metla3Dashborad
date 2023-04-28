import { Stack, Typography } from '@mui/material'
import React from 'react'
import BubbleChartIcon from '@mui/icons-material/BubbleChart'
export default function HeaderCarts() {
  return (
    <Stack mb={{ xs: '15px', sm: '0' }}>
      <Stack alignItems={'center'} direction={'row'} gap={'17px'}>
        <BubbleChartIcon sx={{ fontSize: '53px', color: 'var(--color-icon)' }} />
        <Stack>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: '600',
              color: 'var(--text-btn)',
            }}
          >
            Title
          </Typography>
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: '400',
              color: 'var(--text-btn)',
            }}
          >
            sub-title
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}
