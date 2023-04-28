import { useTranslation } from 'react-i18next'

function Data() {
  const { t } = useTranslation()
  const data = {
    links: [
      {
        icon: './icons/dashboard.png',
        name: t('dashboard'),
        path: '/',
      },
      {
        icon: './icons/users.png',
        name: t('Categories'),
        path: '/Categories',
      },    {
        icon: './icons/users.png',
        name: t('Departments'),
        path: '/Departments',
      },  {
        icon: './icons/users.png',
        name: t('Farms'),
        path: '/Farms',
      },  {
        icon: './icons/users.png',
        name: t('projects'),
        path: '/Projects',
      },
    ],
  }
  
  return data
}

export default Data
