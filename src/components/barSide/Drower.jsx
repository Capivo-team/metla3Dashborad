import * as React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { ShowMenu } from '../icons'

import MenuIcon from '@mui/icons-material/Menu'
import { IconButton } from '@mui/material'
import { useSelector } from 'react-redux'
import Items from './items'

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })
  const lng = useSelector((state) => state.lang)

  const mode = useSelector((state) => state.mode)
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '195px',
        borderRadius: lng === 'ar' ? '20px 0 0 20px' : '0 20px 20px 0',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        zIndex: 9999,
        // background: 'var(--main-color)',
        // width:'80%'
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Items />
    </Box>
  )

  return (
    <div>
      {[lng === 'rtl' ? 'right' : 'left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            sx={{
              width: '40px',
              height: '40px',
              background: 'var(--background-btn)',
              borderRadius: '18px',
              display: {
                sm: 'none',
                xs: 'flex',
                transform: lng !== 'rtl' ? 'rotate(0deg)' : 'rotate(180deg)',
              },
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            <ShowMenu color={mode ? 'white' : 'black'} />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  )
}
