import { CircularProgress, Stack } from '@mui/material';
import React from 'react';

export default function Loading() {
  return (
    <Stack
      left={0}
      top={0}
      justifyContent={'center'}
      zIndex={5}
      alignItems={'center'}
      position={'absolute'}
      sx={{ background: '#00000059' }}
      width={'100%'}
      height={'100%'}
    >
      <CircularProgress />
    </Stack>
  );
}
