import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import BlockIcon from '@mui/icons-material/Block'
import { Stack } from '@mui/system'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Company from '../../../Api/company'
import { useState } from 'react'

export default function Block({ msg, editProduct }) {
  const [open, setOpen] = React.useState(false)
  const lng = useSelector((e) => e.lng)
  const { t } = useTranslation()

  const handleClickOpen = () => {
    setOpen(true)
  }
  const [isbanded, setIsBannded] = useState(editProduct.banned)
  const handleClose = () => {
    setOpen(false)
  }
  const handledelete = async () => {
    const isBanded = await Company.put({
      banned:!isbanded,id:editProduct._id
    })
    setIsBannded(!isbanded)
    setOpen(false)
  }
  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <BlockIcon
          sx={{
            color: isbanded ? 'red' : 'black',
          }}
        />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Stack
          dir={lng === 'ar' ? 'rtl' : 'ltr'}
          sx={{ background: 'var(--background-nav)' }}
        >
          <DialogTitle id="alert-dialog-title">{msg.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {msg.text}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}> {t('disagree')}</Button>
            <Button onClick={handledelete} autoFocus>
              {t('confirm')}
            </Button>
          </DialogActions>
        </Stack>
      </Dialog>
    </div>
  )
}
