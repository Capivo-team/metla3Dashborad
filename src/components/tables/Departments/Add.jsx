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

export default function Add({ total, setIsDrawerOpen }) {
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
    setIsLoading(true);
    Apiservices.post('/departments', {
      nameAR: item.nameArabic,
      nameEN: item.nameEnglish,
    })
      .then((res) => {
        setOpen(false);
        if (total > Manufacturers.length) {
          console.log(res.data.data);
          dispatch(actions.setManufacturers([...Manufacturers, res.data.data]));
        }
        setIsLoading(false);
        setIsDrawerOpen(false);
        setItem({
          nameEnglish: '',
          nameArabic: '',
        });
        setBase64Image('');
      })
      .catch((err) => console.log(err));
  };
  const lang = useSelector((state) => state.lang);

  return (
    <Stack
      position={'relative'}
      dir={lang}
      component={'form'}
      gap={'20px'}
      p={'30px 20px 120px 20px'}
      borderRadius={'20px'}
      width={'100%'}
      height={'100vh'}
      sx={{ overflowY: 'scroll' }}
      onClick={() => setIsDrawerOpen(true)}
    >
      <Stack height={'100vh'} sx={{ overflowY: 'scroll' }}>
        <Stack>
          <label className='col-form-label' htmlFor='nameEnglish'>
            {t('nameEn')}
          </label>
          <input
            className='custom-input'
            color='info'
            value={item.nameEnglish}
            onChange={(e) => setItem({ ...item, nameEnglish: e.target.value })}
            id='nameEnglish'
            type='text'
            variant='outlined'
          />
        </Stack>
        <Stack>
          <label className='col-form-label' htmlFor='nameArabic'>
            {t('nameAr')}
          </label>
          <input
            className='custom-input'
            color='info'
            value={item.nameArabic}
            onChange={(e) => setItem({ ...item, nameArabic: e.target.value })}
            id='nameArabic'
            type='text'
            variant='outlined'
          />
        </Stack>
      </Stack>
      <button className='addButton' onClick={handelAdd} variant='contained'>
        {t('Add')}
      </button>
      {isloading && <Loading />}
    </Stack>
  );
}
