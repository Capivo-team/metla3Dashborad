import * as React from 'react';
import TableContainer from '@mui/material/TableContainer';
import { Box, Stack, Typography } from '@mui/material';
import Row from './HeadRow';
import TestTable from './BodyTable';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Rows from '../../skeleton/Rows';
import Add from './Add';
import { Drawer } from '../../custom/Drawer';
import { actions } from '../../../Redux';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

export default function BasicTable({ count }) {
  const { t } = useTranslation();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const dispatch = useDispatch();

  const isUpdate = useSelector((state) => state.isUpdate);
  const handleButtonClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
    dispatch(actions.setIsStacky(1));
  };
  return (
    <TableContainer
      sx={{
        background: 'var(--background-table)',
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
                {t('Categories')}
              </Typography>
            </Stack>
            <Box>
              <Drawer
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
              />{' '}
            </Box>
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
