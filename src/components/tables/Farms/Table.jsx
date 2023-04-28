import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Stack, Typography } from '@mui/material';
import Row from './HeadRow';
import TestTable from './BodyTable';
import UsePagination from './Pagination';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Rows from '../../skeleton/Rows';
import Add from './Add';
export default function BasicTable({ count }) {
  const { t } = useTranslation();
  const isUpdate = useSelector((state) => state.isUpdate);

  return (
    <TableContainer
      sx={{
        // marginTop: '20px',
        background: 'var(--background-table)',
        // padding: '30px 15px',
        // borderRadius: '20px',
      }}
      className='table'
    >
      <Stack
        sx={{
          minWidth: 850,
          background: 'var(--background-table)',
          position: 'relative',
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
              <img style={{ width: '27px' }} src={'./icons/users.png'} alt='' />
              <Typography
                sx={{
                  color: 'var(--color-text)',
                  fontSize: '16px',
                  fontWeight: '900',
                }}
              >
                {t('Farms')}
              </Typography>
            </Stack>
            {/* <Box>
              <Add total={count} />
            </Box> */}
          </Stack>

          <Stack mb={'20px'}>
            <Row />
            {!isUpdate ? <TestTable /> : <Rows />}
          </Stack>
        </Stack>
      </Stack>
    </TableContainer>
  );
}
