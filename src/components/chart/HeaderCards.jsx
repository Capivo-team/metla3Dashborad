import { Stack, Typography } from '@mui/material'
import React from 'react'
import Diversity2Icon from '@mui/icons-material/Diversity2'
export default function HeaderCards() {
  return (
    <Stack mb={{xs:'15px',sm:'0'}} >
      <Stack direction={'row'} gap={'17px'}>
        <Diversity2Icon sx={{fontSize:'33px',color:'var(--color-icon)'}} />
        <Stack>
        <Typography sx={{fontSize:'18px',fontWeight:'600',color:'var(--text-btn)'}}>Title</Typography>
        <Typography sx={{fontSize:'12px',fontWeight:'400',color:'var(--text-btn)'}}>sub-title</Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}
