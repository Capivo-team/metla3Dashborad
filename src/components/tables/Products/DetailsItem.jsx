import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Item from './Item'
import { Container, Stack, Typography } from '@mui/material'
export default function PopUpDetails({ e, i }) {
  const [open, setOpen] = React.useState(false)
  const [action, setAction] = React.useState(true)
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setAction(false)
  }
  console.log(e)
  return (
    <div>
      <Stack
        sx={{
          background:
            i % 2 === 0
              ? 'var(--background-table)'
              : 'var(--background-table-main-row)',
          padding: '13px',
          borderRadius: '12px',
        }}
        // mt={'20px'}
        alignItems={'center'}
        justifyContent={'space-between'}
        direction={'row'}
        key={i}
      >
        <Item fn={handleClickOpen} setAction={setAction} e={e} i={i} />
      </Stack>
      {action && (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <Container maxWidth='sm'>
          <Stack minWidth={'250px'} gap={'20px'} width={'100%'} padding={'20px'} zIndex={1} position={'relative'}>
            <Typography align='center' sx={{ fontSize: '25px',fontWeight:'700' }}>Details</Typography>
            <Stack gap={'10px'} alignItems={'center'} direction={'row'}>
              <Typography sx={{ fontSize: '20px',fontWeight:'700' }}>nameAR :</Typography>
              <Typography sx={{ fontSize: '18px',fontWeight:'500' }}>{e.nameAR}</Typography>
            </Stack>
            <Stack gap={'10px'} alignItems={'center'} direction={'row'}>
              <Typography sx={{ fontSize: '20px',fontWeight:'700' }}>nameEN :</Typography>
              <Typography sx={{ fontSize: '18px',fontWeight:'500' }}>{e.nameEN} </Typography>
            </Stack>
            <Stack gap={'10px'} alignItems={'center'} direction={'row'}>
              <Typography sx={{ fontSize: '20px',fontWeight:'700' }}>Price :</Typography>
              <Typography>{e.price}</Typography>
            </Stack>
            <Stack gap={'10px'} alignItems={'center'} direction={'row'}>
              <Typography sx={{ fontSize: '20px',fontWeight:'700' }}>quantity :</Typography>
              <Typography sx={{ fontSize: '18px',fontWeight:'500' }}>{e.quantity}</Typography>
            </Stack>
            <Stack gap={'10px'} alignItems={'center'} direction={'row'}>
              <Typography sx={{ fontSize: '20px',fontWeight:'700' }}>descriptionEN :</Typography>
              <Typography maxWidth={'350px'} sx={{ fontSize: '18px',fontWeight:'500' }}>{e.descriptionEN}</Typography>
            </Stack>
            <Stack gap={'10px'} alignItems={'center'} direction={'row'}>
              <Typography  sx={{ fontSize: '20px',fontWeight:'700' }}>descriptionAR :</Typography>
              <Typography maxWidth={'350px'} sx={{ fontSize: '18px',fontWeight:'500' }}>{e.descriptionAR}</Typography>
            </Stack>
          </Stack>
          </Container>
         
        </Dialog>
      )}
    </div>
  )
}
