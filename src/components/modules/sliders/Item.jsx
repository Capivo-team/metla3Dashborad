import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import ColorSwitches from './Switch'
import Actions from './Actions'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import PopUp from '../../custom/popup'
import Children from './Children'

export default function Item({ e, i }) {
  const [isDeleted, setIsDeleted] = useState(false)
  const [open, setOpen] = React.useState(false)
  const openPopUP = () => {
    setOpen(true)
  }
  const [item, setItem] = useState(e)
  console.log(item, 111)
  return (
    <>
      {!isDeleted && (
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
          <img
            style={{ width: '200px', borderRadius: '20px' }}
            src={e.image}
            alt=""
          />
          <Actions setIsDeleted={setIsDeleted} setItem={setItem} item={item} />
        </Stack>
      )}

      <PopUp
        open={open}
        children={<Children item={item} />}
        setOpen={setOpen}
      />
    </>
  )
}
