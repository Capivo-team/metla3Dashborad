import React from 'react'
import Table from '../components/modules/News/Table'
import { Stack, Typography } from '@mui/material'
import UsePagination from '../components/modules/News/Pagination'
import { useState } from 'react'
import Apiservices from '../services/ApiServices'
import NewsApi from '../Api/news'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../Redux'
export default function News() {
  const { t } = useTranslation()

  const [page, setPage] = useState(1)

  const [pages, setPages] = useState(null)
  const [count, setCount] = useState(5)
  const dispatch = useDispatch()

  const handelChengeCount = async (e) => {
    const news = await NewsApi.get(e.target.value, 1)
    setCount(e.target.value)
    console.log(news.data.pagination, e.target.value, 11111)
    setPages(news.data.pagination.pages)
    dispatch(actions.setManufacturers(news.data.data))
  }
  const Manufacturers = useSelector((state) => state.Manufacturers)
  const [isEnd, setIsEnd] = useState(true)

  return (
    <Stack width={'100%'} mt={'20px'}>
      <Stack
        p={'20px'}
        sx={{
          position: 'relative',
          borderRadius: '20px',
          background: 'var(--background-table)',
          margin: '40px 0',
          zIndex: '1',
          margin: { xs: '25px 15px 50px 15px', sm: '20px 0' },
        }}
      >
        <Table count={count} />
        <Stack
          justifyContent={'space-between'}
          gap={'20px'}
          flexWrap={'wrap'}
          direction={'row'}
          alignItems={'center'}
        >
          <Typography sx={{ color: '#6d767ebf', fontSize: '13px' }}>
            Showing {!isEnd ? page * count + 1 : (page - 1) * count + 1} to{' '}
            {!isEnd
              ? page * count + Manufacturers.length - 2
              : (page - 1) * count + Manufacturers.length}{' '}
            of {pages && pages.total} items
          </Typography>
          <Stack alignItems={'flex-end'}>
            <Stack
              flexWrap={'wrap'}
              alignItems={'center'}
              gap={{ sm: '30px', xs: '10px' }}
              direction={'row'}
            >
              <UsePagination
                isEnd={isEnd}
                setIsEnd={setIsEnd}
                page={page}
                setPage={setPage}
                setPages={setPages}
                count={count}
                pages={pages && pages}
              />

              <select
                style={{
                  width: '66px',
                  borderRadius: '11px',
                  padding: '0 10px',
                  background: 'var(--background-table)',
                  border: '1px solid  #6d6d6d',
                  color: 'var(--color-text)',
                  fontSize: '11px',
                  height: '31px',
                }}
                onChange={handelChengeCount}
                name="cars"
                id="cars"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
