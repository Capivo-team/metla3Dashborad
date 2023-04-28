import * as React from 'react'

import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import { Box, Button, Stack, Typography } from '@mui/material'
import Row from './HeadRow'
import TestTable from './BodyTable'
import UsePagination from './Pagination'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import Rows from '../../skeleton/Rows'
import Add from './Add'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'

import AddDrawer from './AddDrower'
import { actions } from '../../../Redux'
export default function BasicTable({ count }) {
  const { t } = useTranslation()
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
  const dispatch = useDispatch()

  const isUpdate = useSelector((state) => state.isUpdate)
  const handleButtonClick = () => {
    setIsDrawerOpen(!isDrawerOpen)
    dispatch(actions.setIsStacky(1))
  }
  return (
    <TableContainer
      sx={{
        // marginTop: '20px',
        background: 'var(--background-table)',
        // padding: '30px 15px',
        // borderRadius: '20px',
      }}
      className="table"
    >
      <Stack
        sx={{
          minWidth: 880,
          background: 'var(--background-table)',
          // position: 'relative',
          overflowX: 'scroll',
          minHeight: '440px',
        }}
      >
        <Stack
          sx={{
            background: 'var(--background-table)',
            borderRadius: '20px',
          }}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent={'space-between'}
            gap={'20px'}
          >
            <Stack gap={'10px'} alignItems={'center'} direction={'row'}>
              <img style={{ width: '27px' }} src={'./icons/users.png'} alt="" />
              <Typography
                sx={{
                  color: 'var(--color-text)',
                  fontSize: '16px',
                  fontWeight: '900',
                }}
              >
                {t('Projects')}
              </Typography>
            </Stack>
            <Box>
              <AddDrawer
                isDrawerOpen={isDrawerOpen}
                setIsDrawerOpen={setIsDrawerOpen}
                button={
                  <button
                    style={{
                      color: '#687dcf',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      fontSize: '12px',
                      border: 'none',
                      padding: '10px 13px',
                      borderRadius: '14px',
                    }}
                    onClick={handleButtonClick}
                  >
                    <CloudDownloadIcon sx={{ fontSize: '15px' }} />{' '}
                    <Typography sx={{ fontSize: '14px' }}>Export</Typography>
                  </button>
                }
                items={<Add setIsDrawerOpen={setIsDrawerOpen} total={count} />}
              />
            </Box>
          </Stack>

          <Stack overflowX="scroll" mb={'20px'}>
            <Row />
            {!isUpdate ? <TestTable /> : <Rows />}
          </Stack>
        </Stack>
      </Stack>
    </TableContainer>
  )
}
