import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import { Box, Container, IconButton, Stack } from '@mui/material'
import { useSelector } from 'react-redux'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function PopUp({ open, setOpen, children }) {
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const lang = useSelector((e) => e.lang)
  return (
    <div>
      <></>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: 'var(--background-table)', // تعديلاتك الخاصة هنا
          },
          '& .MuiDialog-paperWidthSm': {
            maxWidth: '600px', // تعديلاتك الخاصة هنا
          },
        }}
      >
        <Stack position={'relative'}>
          <p style={{ width: '600px' }}></p>
          {children}
          <Box
            sx={{
              position: 'absolute',
              left: lang !== 'rtl' ? '' : '10px',
              right: lang === 'rtl' ? '' : '10px',
              top: '10px',
            }}
            display={'flex'}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                color: 'var(--color-text)',
              }}
            >
              <CloseIcon sx={{ color: 'var(--color-text)' }} />
            </IconButton>
          </Box>
        </Stack>
      </Dialog>
    </div>
  )
}
