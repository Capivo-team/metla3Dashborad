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
import { useEffect } from 'react';
import Selected from './Selected';
export default function Edit({ id, setEle, ele, setIsDrawerOpen }) {
  const [base64Image, setBase64Image] = useState('');

  const { t } = useTranslation();
  const [item, setItem] = useState(ele);
  console.log(item);
  const [selectForm, setSelectForm] = useState('6429e65b0156c60010753ff6');
  const [selectCategory, setSelectCategory] = useState(
    '642f5af7bc1f9d001185f4b8'
  );
  const [farms, setFarms] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  useEffect(() => {
    Apiservices.get(`/farms?limit=1000000`).then((res) => {
      setFarms(res.data.data);
    });
    Apiservices.get(`/Categories?limit=1000000`).then((res) => {
      setCategory(res.data.data);
    });
  }, []);
  const handelAdd = () => {
    const requestBody = new FormData();
    requestBody.append('nameEN', item.nameEN);
    requestBody.append('nameAR', item.nameAR);
    requestBody.append('imageProduct', base64Image);
    requestBody.append('farm', selectForm);
    requestBody.append('department', `6429e65b0156c60010753ff6`);
    requestBody.append('quantity', 11);
    requestBody.append('descriptionAR', item.descriptionAR);
    requestBody.append('descriptionEN', item.descriptionEN);
    requestBody.append('price', 11);
    requestBody.append('category', selectCategory);
    setIsLoading(true);
    Apiservices.put(`/products/${id}`, requestBody)
      .then((res) => {
        setEle(res.data.data);
        setIsLoading(false);
        setIsDrawerOpen(false);
      })
      .catch((err) => console.log(err))
      .catch((err) => console.log(err));
  };

  const [isloading, setIsLoading] = useState(false);

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
        <div>
          <label className='col-form-label'>{t('quantity')}</label>
          <input
            className='custom-input'
            type='number'
            value={item.quantity}
            onChange={(e) => setItem({ ...item, quantity: e.target.value })}
          />
        </div>
        <div>
          <label className='col-form-label'>{t('price')}</label>
          <input
            className='custom-input'
            type='number'
            value={item.price}
            onChange={(e) => setItem({ ...item, price: e.target.value })}
          />
        </div>
        <div>
          <label className='col-form-label'>{t('descriptionAR')}</label>
          <input
            className='custom-input'
            type='text'
            value={item.descriptionAR}
            onChange={(e) =>
              setItem({ ...item, descriptionAR: e.target.value })
            }
          />
        </div>
        <div>
          <label className='col-form-label'>{t('descriptionEN')}</label>
          <input
            className='custom-input'
            type='text'
            value={item.descriptionEN}
            onChange={(e) =>
              setItem({ ...item, descriptionEN: e.target.value })
            }
          />
        </div>
        <Stack gap={'15px'} mt={'15px'}>
          <Selected
            label={t('farm')}
            selectedData={selectForm}
            setSelectedData={setSelectForm}
            data={farms}
          />{' '}
          <Selected
            label={t('category')}
            selectedData={selectCategory}
            setSelectedData={setSelectCategory}
            data={category}
          />
          {!base64Image && (
            <img
              style={{ width: '80px', height: '80px', borderRadius: '12px' }}
              src={item.imageProduct}
              alt=''
            />
          )}
          <Upload base64Image={base64Image} setBase64Image={setBase64Image} />
        </Stack>
      </Stack>

      <button className='addButton' onClick={handelAdd} variant='contained'>
        {t('update')}
      </button>
      {isloading && <Loading />}
    </Stack>
  );
}
