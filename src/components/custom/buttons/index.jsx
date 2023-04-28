import { useTranslation } from 'react-i18next';
export const AddButton = ({ handelEvent, text }) => {
  const { t } = useTranslation();

  return (
    <button className='addButton' onClick={handelEvent} variant='contained'>
      {t(text)}
    </button>
  );
};
