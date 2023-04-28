import { FormControl, IconButton, TextField } from '@mui/material'
import React, { useEffect, useState, useCallback } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../Redux'
import { useTranslation } from 'react-i18next'
import debounce from 'lodash.debounce'

export default function Search() {
  const search = useSelector((state) => state.search)
  const dispatch = useDispatch()

  const [timerId, setTimerId] = useState(null)

  const handleSearchChange = useCallback(
    (e) => {
      dispatch(actions.setSearch(e.target.value))
      if (timerId) {
        clearTimeout(timerId)
      }
      setTimerId(
        setTimeout(() => {
          console.log('Send request for:', e.target.value)
          dispatch(actions.setIsSearch())
        }, 500),
      )
    },
    [timerId],
  )
  return (
    <form style={{ display: 'flex', color: '#8074d9' }}>
      <IconButton sx={{ maxHeight: '40px' }}>
        <SearchIcon sx={{ color: '#8074d9' }} />
      </IconButton>{' '}
      <input
        value={search}
        onChange={handleSearchChange}
        // color={mode && 'secondary'}
        style={{
          border: 'none ',
          outline: 'none ',
          color: 'rgb(128, 116, 217)',
          background: 'var(--background-drop-item)',
          maxHeight: '40px',
        }}
      />
    </form>
  )
}

// const [timerId, setTimerId] = useState<number | null>(null)

// const testSearch = useCallback(
//   (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearch(e.target.value)
//     if (timerId) {
//       clearTimeout(timerId)
//     }
//     setTimerId(
//       window.setTimeout(() => {

//           dispatch(withToastr(
//                categoriesAction({
//                     page: page,
//                     pre_page: rowsPerPage,
//                     search: search
//                }),
//                {
//                     success: {
//                          title: "Success to fetch data"
//                     },
//                }
//           ))                }, 500),
//     )
//   },
//   [timerId],
// )
