import * as React from 'react';
import Dialog from '@mui/material/Dialog';

import {
  Button,
  CircularProgress,
  IconButton,
  Stack,
  TextField,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Apiservices from '../../../services/ApiServices';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Upload from '../../Upload/Upload';
import { actions } from '../../../Redux';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../custom/loading';
export default function Edit({ id, setEle, ele, setIsDrawerOpen }) {
  const [open, setOpen] = React.useState(false);

  const [base64Image, setBase64Image] = useState('');

  const { t } = useTranslation();
  const [item, setItem] = useState(ele);

  const [isloading, setIsLoading] = useState(false);
  const handelEdit = () => {
    setIsLoading(true);
    const requestBody = new FormData();

    requestBody.append('nameEN', item.nameEN);
    requestBody.append('nameAR', item.nameAR);
    requestBody.append('image', base64Image);
    Apiservices.put(`/Categories/${id}`, requestBody)
      .then((res) => {
        setEle(res.data.data);
        setIsLoading(false);
        setIsDrawerOpen(false);
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
          <label className='col-form-label'>{t('nameEn')}</label>
          <input
            className='custom-input'
            type='text'
            value={item.nameEN}
            onChange={(e) => setItem({ ...item, nameEN: e.target.value })}
          />
        </Stack>
        <div>
          <label className='col-form-label'>{t('nameAr')}</label>
          <input
            className='custom-input'
            type='text'
            value={item.nameAR}
            onChange={(e) => setItem({ ...item, nameAR: e.target.value })}
          />
        </div>

        <Stack gap={'20px'} margin={'20px 0'}>
          <img src={item.image} alt='' />
          <Upload base64Image={base64Image} setBase64Image={setBase64Image} />
        </Stack>
      </Stack>

      <button className='addButton' onClick={handelEdit} variant='contained'>
        {t('update')}
      </button>
      {isloading && <Loading />}
    </Stack>
  );
}
