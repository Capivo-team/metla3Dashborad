import { Box, IconButton, Stack } from '@mui/material'
import React from 'react'
export default function DropItem({ isActive, setIsActive, Children, icon }) {
  return (
    <Stack>
      <IconButton 
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: !isActive ? 'var(--background-btn)' : '#594dad',
          borderRadius: '18px',
          position:'relative'
        }}
        onClick={() => setIsActive(true)}
      >
        <Box width={'100%'} height={'100%'} position={'absolute' }></Box>
        {isActive && icon[1] ? icon[1] : icon[0]}
      </IconButton>
      <Stack
        position="absolute"
        top={'60px'}
        left={0}
        width={'100vw'}
        className={isActive ? 'active-nav-item' : 'nav-item'}
        sx={{ background: 'var(--background-drop-item)' }}
        alignItems={'center'}
        justifyContent={'center'}
      >
        {isActive && Children}
      </Stack>
    </Stack>
  )
}
