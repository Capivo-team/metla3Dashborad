import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'

import Slide from '@mui/material/Slide'
import { Avatar } from '@mui/material'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function Video({ video }) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button
        sx={{ border: 'none' }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        <Avatar
          src={`https://thumbs.dreamstime.com/b/video-camera-vector-icon-movie-camera-illustration-logo-play-symbol-web-mobile-video-camera-vector-icon-movie-camera-154417834.jpg`}
          alt={''}
        />{' '}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <video controls src={video}></video>
      </Dialog>
    </div>
  )
}
