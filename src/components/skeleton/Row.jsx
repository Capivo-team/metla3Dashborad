import { Skeleton, Stack } from '@mui/material'
import React from 'react'

export default function Row() {
  return (
    <Stack justifyContent={'space-between'} p={'14px'} direction={'row'}>
      <Skeleton variant="text" width={'40px'} sx={{ fontSize: '1rem' }} />
      <Stack width={'150px'} alignItems={'center'}>
      <Skeleton variant="circular" width={40} height={40} />
      </Stack>
      <Stack width={'150px'} alignItems={'center'}>
      <Skeleton variant="text" width={'100px'} sx={{ fontSize: '1rem' }} />
      </Stack>
      <Stack width={'150px'} alignItems={'center'}>
      <Skeleton variant="text" width={'100px'} sx={{ fontSize: '1rem' }} />
      </Stack>
      <Stack width={'150px'} alignItems={'center'}>
      <Skeleton variant="text" width={'100px'} sx={{ fontSize: '1rem' }} />
      </Stack>
      <Stack justifyContent={'center'} gap={'15px'} direction={'row'} width={'150px'} alignItems={'center'}>
      <Skeleton variant="circular" width={20} height={20} />
      <Skeleton variant="circular" width={20} height={20} />
      </Stack>

    </Stack>
  )
}
