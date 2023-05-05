import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { CircularProgress, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import Apiservices from '../../../services/ApiServices'
import { actions } from '../../../Redux'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import News from '../../../Api/news'
import Category from '../../../Api/category'
import Videos from '../../../Api/videos'
export default function Delete({ id, setIsDeleted }) {
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true)
  }
  const { t } = useTranslation()

  const handleClose = () => {
    setOpen(false)
  }
  const Manufacturers = useSelector((state) => state.Manufacturers)

  const [isLoading, setIsloading] = useState(false)
  const handelDelete = async () => {
    dispatch(actions.setIsUpdate())

    setIsloading(true)
    const item = await Videos.destroy(id)

    // Apiservices.delete(`Categories/${id}`).then((res) => {
    setIsloading(false)
    setIsDeleted(true)
    dispatch(
      actions.setManufacturers(Manufacturers.filter((e, i) => e._id !== id)),
    )

    dispatch(actions.setIsUpdate())
    // })
    setOpen(false)
  }
  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <IconButton variant="outlined" onClick={handleClickOpen}>
          <DeleteIcon sx={{ color: 'red' }} />
        </IconButton>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t('deleteMsg')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}> {t('cancel')}</Button>
          <Button onClick={handelDelete} autoFocus>
            {t('accept')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
