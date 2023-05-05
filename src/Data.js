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
      {
        icon: './icons/users.png',
        name: t('videos'),
        path: '/videos',
      },
      {
        icon: './icons/users.png',
        name: t('offers'),
        path: '/offers',
      },
      {
        icon: './icons/users.png',
        name: t('events'),
        path: '/events',
      },
      {
        icon: './icons/users.png',
        name: t('questions'),
        path: '/questions',
      },
      {
        icon: './icons/users.png',
        name: t('suggestions'),
        path: '/suggestions',
      },
      {
        icon: './icons/users.png',
        name: t('exchange'),
        path: '/exchange',
      },
      {
        icon: './icons/users.png',
        name: t('company'),
        path: '/company',
      },
    ],
  }

  return data
}

export default Data
