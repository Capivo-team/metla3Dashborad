import { Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Row() {
  const { t } = useTranslation()
  const headRow = ['#', t('image'), t('name'), t('video'), t('actions')]
  return (
    <Stack
      sx={{
        background: 'var(--background-table-main-row)',
        padding: '14px 13px',
        borderRadius: '12px',
      }}
      mt={'20px'}
      justifyContent={'space-between'}
      width={'100%'}
      direction={'row'}
    >
      {headRow.map((e, i) => (
        <Stack minWidth={i !== 0 ? '150px' : '40px'} key={i}>
          <Typography
            sx={{
              fontSize: '15px',
              color: 'var(--color-text)',
              fontWeight: 'bold',
            }}
            align={i === 0 ? 'center' : 'center'}
          >
            {e}
          </Typography>
        </Stack>
      ))}
    </Stack>
  )
}
