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
import Selected from './Selected';
import { useEffect } from 'react';

export default function Add({ total, setIsDrawerOpen }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const Manufacturers = useSelector((state) => state.Manufacturers);

  const [isloading, setIsLoading] = useState(false);

  const [base64Image, setBase64Image] = useState('');

  const { t } = useTranslation();
  const [item, setItem] = useState({
    nameEnglish: '',
    nameArabic: '',
    quantity: '',
    descriptionAR: '',
    descriptionEN: '',
    price: '',
  });
  const [selectForm, setSelectForm] = useState('');
  const [selectCategory, setSelectCategory] = useState('');
  const [farms, setFarms] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  useEffect(() => {
    Apiservices.get(`/farms?limit=1000000`).then((res) =>
      setFarms(res.data.data)
    );
    Apiservices.get(`/Categories?limit=1000000`).then((res) =>
      setCategory(res.data.data)
    );
  }, []);

  const handelAdd = () => {
    const requestBody = new FormData();
    requestBody.append('nameEN', item.nameEnglish);
    requestBody.append('nameAR', item.nameArabic);
    requestBody.append('imageProduct', base64Image);
    requestBody.append('farm', selectForm);
    requestBody.append('department', `6429e65b0156c60010753ff6`);
    requestBody.append('quantity', item.quantity);
    requestBody.append('descriptionAR', item.descriptionAR);
    requestBody.append('descriptionEN', item.descriptionEN);
    requestBody.append('price', item.price);
    requestBody.append('category', selectCategory);
    setIsLoading(true);
    Apiservices.post('/products', requestBody)
      .then((res) => {
        setOpen(false);
        setIsDrawerOpen(false);

        if (total > Manufacturers.length) {
          console.log(res.data.data);
          dispatch(actions.setManufacturers([...Manufacturers, res.data.data]));
        }
        setIsLoading(false);

        setItem({
          nameEnglish: '',
          nameArabic: '',
          quantity: '',
          descriptionAR: '',
          descriptionEN: '',
          price: '',
        });
        setIsDrawerOpen(false);
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
        <Stack>
          <label className='col-form-label' htmlFor='quantity'>
            {t('quantity')}
          </label>
          <input
            className='custom-input'
            color='info'
            value={item.quantity}
            onChange={(e) => setItem({ ...item, quantity: e.target.value })}
            id='quantity'
            type='number'
            variant='outlined'
          />
        </Stack>
        <Stack>
          <label className='col-form-label' htmlFor='price'>
            {t('price')}
          </label>
          <input
            className='custom-input'
            color='info'
            value={item.price}
            onChange={(e) => setItem({ ...item, price: e.target.value })}
            id='price'
            type='number'
            variant='outlined'
          />
        </Stack>
        <Stack>
          <label className='col-form-label' htmlFor='descriptionAR'>
            {t('descriptionAR')}
          </label>
          <input
            className='custom-input'
            color='info'
            value={item.descriptionAR}
            onChange={(e) =>
              setItem({ ...item, descriptionAR: e.target.value })
            }
            id='descriptionAR'
            type='text'
            variant='outlined'
          />
        </Stack>
        <Stack>
          <label className='col-form-label' htmlFor='descriptionEN'>
            {t('descriptionEN')}
          </label>
          <input
            className='custom-input'
            color='info'
            value={item.descriptionEN}
            onChange={(e) =>
              setItem({ ...item, descriptionEN: e.target.value })
            }
            id='descriptionEN'
            type='text'
            variant='outlined'
          />
        </Stack>
        <Stack>
          <label className='col-form-label' htmlFor='descriptionEN'>
            {t('farms')}
          </label>
          <Selected
            label={t('farms')}
            selectedData={selectForm}
            setSelectedData={setSelectForm}
            data={farms}
          />
        </Stack>
        <Stack>
          <label className='col-form-label' htmlFor='descriptionEN'>
            {t('category')}
          </label>
          <Selected
            label={t('category')}
            selectedData={selectCategory}
            setSelectedData={setSelectCategory}
            data={category}
          />
          <Stack mt='15px'>
            <Upload base64Image={base64Image} setBase64Image={setBase64Image} />
          </Stack>
        </Stack>
      </Stack>

      <button className='addButton' onClick={handelAdd} variant='contained'>
        {t('Add')}
      </button>
      {isloading && <Loading />}
    </Stack>
  );
}
