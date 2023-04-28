import { IconButton, Stack } from '@mui/material'
import React from 'react'
import Edit from './Edit'
import Delete from './Delete'
import Drawer from './AddDrower'
import { useDispatch } from 'react-redux'
import { actions } from '../../../Redux'
import EditIcon from '@mui/icons-material/Edit'

export default function Actions({
  item,
  setItem,
  setIsDeleted,
  setAction,
}) {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
  const dispatch = useDispatch()

  const handleButtonClick = () => {
    setIsDrawerOpen(!isDrawerOpen)
    dispatch(actions.setIsStacky(1))
  }
  return (
    <Stack justifyContent={'center'} direction={'row'} width={'120px'}>
      <Drawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        button={
          <IconButton variant="outlined" onClick={handleButtonClick}>
            <EditIcon sx={{ color: '#6c5dd3' }} />{' '}
          </IconButton>
        }
        items={
          <Edit setIsDrawerOpen={setIsDrawerOpen}
            setAction={setAction}
            setEle={setItem}
            ele={item}
            id={item._id}
          />
        }
      />
      <Delete setIsDeleted={setIsDeleted} id={item._id} />
    </Stack>
  )
}
