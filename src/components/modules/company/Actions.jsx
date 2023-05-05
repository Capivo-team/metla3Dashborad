import { IconButton, Stack } from '@mui/material'
import React from 'react'
import Edit from './Edit'
import Delete from './Delete'
import { actions } from '../../../Redux'
import { useDispatch } from 'react-redux'
import EditIcon from '@mui/icons-material/Edit'
import { Drawer } from '../../custom/Drawer'
import { useTranslation } from 'react-i18next'
import Block from './BlockMsg'
export default function Actions({
  item,
  setItem,
  setIsDeleted,
  setAction,
  fn,
}) {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const handleButtonClick = () => {
    setIsDrawerOpen(!isDrawerOpen)
    dispatch(actions.setIsStacky(1))
  }
  return (
    <Stack justifyContent={'center'} direction={'row'} width={'150px'}>
      <Block
        msg={{
          title: item.banned ? t('openMsg') : t('blockMsg'),
          text: item.banned ? t('openWarning') : t('blockWarning'),
        }}
        editProduct={item}
      />
      <Delete setIsDeleted={setIsDeleted} id={item._id} />
    </Stack>
  )
}
