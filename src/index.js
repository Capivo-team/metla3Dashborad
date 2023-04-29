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

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Charts /> },
      { path: '/news', element: <News /> },
      { path: '/category', element: <Categories /> },
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
