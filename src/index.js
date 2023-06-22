import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './Redux'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './i18n'
import Charts from './pages/Charts'
import News from './pages/News'
import Categories from './pages/Categories'
import Videos from './pages/Videos'
import Offers from './pages/Offers'
import Questions from './pages/Questions'
import Suggestions from './pages/Suggestions'
import Exchange from './pages/Exchange'
import Company from './pages/Company'
import Sliders from './pages/Sliders'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Charts /> },
      { path: '/news', element: <News /> },
      { path: '/category', element: <Categories /> },
      { path: '/videos', element: <Videos /> },
      { path: '/offers', element: <Offers /> },
      { path: '/questions', element: <Questions /> },
      { path: '/suggestions', element: <Suggestions /> },
      { path: '/exchange', element: <Exchange /> },
      { path: '/company', element: <Company /> },
      { path: '/sliders', element: <Sliders /> },
    ],
    // errorElement: <NotFound />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
