import React from 'react'
import Data from '../../Data'
import { Link } from 'react-router-dom'
import { Box, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../Redux'
export default function Links({ active }) {
  const dispatch = useDispatch()
  const isActive = useSelector((state) => state.activeLink)

  return (
    <Stack gap={'20px'}>
      {Data().links.map((e, i) => (
        <Link
          onClick={() => dispatch(actions.setActiveLink(i))}
          style={{
            color: 'white',
            textDecoration: 'none',
            background: isActive === i && '#19191f',
            borderRadius: '12px',
            padding: '7px 15px',
          }}
          key={i}
          to={e.path}
        >
          <Stack gap={'20px'} alignItems={'center'} direction={'row'}>
            <Box mt={'5px'} sx={{ width: '15px' }}>
              <img style={{ width: '100%' }} src={e.icon} alt="" />
            </Box>

            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: '700',
                display: { sm: !active && 'none' },
              }}
            >
              {e.name}
            </Typography>
          </Stack>
        </Link>
      ))}
    </Stack>
  )
}
