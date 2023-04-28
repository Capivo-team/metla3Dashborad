import * as React from 'react';
import { Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Upload from '../../custom/Upload';
import Apiservices from '../../../services/ApiServices';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../Redux';
import Loading from '../../custom/loading';
import { Input } from '../../custom/inputs';
import { AddButton } from '../../custom/buttons';

export default function Add({ total, setIsDrawerOpen }) {
  const dispatch = useDispatch();
  const Manufacturers = useSelector((state) => state.Manufacturers);

  const [isloading, setIsLoading] = useState(false);

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
    requestBody.append('image', base64Image);
    setIsLoading(true);
    Apiservices.post('../components/tables/Categories/Table', requestBody)
      .then((res) => {
        setIsDrawerOpen(false);
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
          <Input
            value={item}
            setValue={setItem}
            type={'text'}
            name={'nameEnglish'}
          />
        </Stack>
        <Stack>
          <label className='col-form-label' htmlFor='nameArabic'>
            {t('nameAr')}
          </label>
          <Input
            value={item}
            setValue={setItem}
            type={'text'}
            name={'nameArabic'}
          />

          <Stack mt='35px'>
            <Upload base64Image={base64Image} setBase64Image={setBase64Image} />
          </Stack>
        </Stack>
      </Stack>
      <AddButton handelEvent={handelAdd} text='Add' />
      {isloading && <Loading />}
    </Stack>
  );
}
