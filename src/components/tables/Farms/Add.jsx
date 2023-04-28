import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Upload from '../../Upload/Upload';
import Apiservices from '../../../services/ApiServices';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../Redux';
import Loading from '../../custom/loading';

import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

export default function Add({ total }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const Manufacturers = useSelector((state) => state.Manufacturers);

  const [isloading, setIsLoading] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [base64Image, setBase64Image] = useState('');

  const { t } = useTranslation();
  const [item, setItem] = useState({
    nameEnglish: '',
    nameArabic: '',
  });
  const handelAdd = () => {
    const requestBody = new FormData();
    requestBody.append('nameEN', item.nameEnglish);
    requestBody.append('nameAR', item.nameArabic);
    requestBody.append('logo', base64Image);
    requestBody.append('crops[]', '6428a404a736b9224818b6fd');
    requestBody.append('crops[]', '6428a40fa736b9224818b700');
    requestBody.append('crops[]', '6428a40fa736b9224818b700');
    requestBody.append('crops[]', '6428a40fa736b9224818b700');
    setIsLoading(true);
    Apiservices.post('/Categories', requestBody)
      .then((res) => {
        setOpen(false);
        if (total > Manufacturers.length) {
          console.log(res.data.data);
          dispatch(actions.setManufacturers([...Manufacturers, res.data.data]));
        }
        setIsLoading(false);

        setItem({
          nameEnglish: 'geervrvr',
          nameArabic: 'rvrvrvr',
        });
        setBase64Image('');
      })
      .catch((err) => console.log(err));
  };
  const lang = useSelector((state) => state.lang);

  return (
    <React.Fragment>
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
        onClick={handleClickOpen}
      >
        <CloudDownloadIcon sx={{ fontSize: '15px' }} />{' '}
        <Typography sx={{ fontSize: '14px' }}>Export</Typography>
      </button>

      <Dialog
        fullWidth={true}
        maxWidth={'xs'}
        open={open}
        onClose={handleClose}
        className='popup-form'
      >
        <Stack
          position={'relative'}
          dir={lang}
          component={'form'}
          gap={'20px'}
          p={'30px 20px'}
          borderRadius={'20px'}
        >
          <TextField
            sx={{
              borderRadius: '8px',
              border: '1px solid var(--icons-side-menu)',
            }}
            color='info'
            value={item.nameEnglish}
            onChange={(e) => setItem({ ...item, nameEnglish: e.target.value })}
            id='outlined-basic'
            label={t('nameEn')}
            variant='outlined'
          />
          <TextField
            sx={{
              borderRadius: '8px',
              border: '1px solid var(--icons-side-menu)',
            }}
            color='info'
            value={item.nameArabic}
            onChange={(e) => setItem({ ...item, nameArabic: e.target.value })}
            id='outlined-basic'
            label={t('nameAr')}
            variant='outlined'
          />

          <Upload base64Image={base64Image} setBase64Image={setBase64Image} />
          <Button
            sx={{ background: '#9d1111!important' }}
            onClick={handelAdd}
            variant='contained'
          >
            {t('Add')}
          </Button>
          {isloading && <Loading />}
        </Stack>
      </Dialog>
    </React.Fragment>
  );
}
