import {  IconButton, Stack } from '@mui/material'
import React from 'react'
import Edit from './Edit'
import Delete from './Delete'
import { useDispatch } from 'react-redux'
import { actions } from '../../../Redux'
import EditIcon from '@mui/icons-material/Edit'
import Drawer from '../Products/AddDrower'

export default function Actions({ item, setItem, setIsDeleted }) {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
  const dispatch = useDispatch()

  const handleButtonClick = () => {
    setIsDrawerOpen(!isDrawerOpen)
    dispatch(actions.setIsStacky(1))
  }
  return (
    <Stack justifyContent={'center'} direction={'row'} width={'150px'}>
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
            setEle={setItem}
            ele={item}
            id={item._id}
          />
        }
      />
      {/* <Edit setEle={setItem} ele={item} id={item._id} /> */}
      <Delete setIsDeleted={setIsDeleted} id={item._id} />
    </Stack>
  )
}
