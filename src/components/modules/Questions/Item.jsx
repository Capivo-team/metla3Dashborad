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
          <Typography
            onClick={openPopUP}
            minWidth={'40px'}
            sx={{ color: 'var(--color-text)' }}
            align={i === 0 ? 'center' : 'center'}
          >
            {i + 1}
          </Typography>

          <Typography
            onClick={openPopUP}
            width={'150px'}
            sx={{ color: 'var(--color-text)' }}
            align={i === 0 ? 'center' : 'center'}
          >
            {item.question && item.question}
          </Typography>

          <Typography
            onClick={openPopUP}
            width={'150px'}
            sx={{ color: 'var(--color-text)' }}
            align={i === 0 ? 'center' : 'center'}
          >
            {item.answer && item.answer}
          </Typography>

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
