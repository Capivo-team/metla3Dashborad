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
        name: t('News'),
        path: '/news',
      },
      {
        icon: './icons/users.png',
        name: t('category'),
        path: '/category',
      },
    ],
  }

  return data
}

export default Data
