import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './Redux'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './i18n'
import Charts from './pages/Charts'
import Categories from './pages/Categories'
import Departments from './pages/Departments'
import Farms from './pages/Farms'
import Projects from './pages/Projects'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Charts /> },
      // { path: '/Manufacturers', element: <Manufacturers /> },
      { path: '/Categories', element: <Categories /> },
      { path: '/Departments', element: <Departments /> },
      { path: '/Farms', element: <Farms /> },
      { path: '/Projects', element: <Projects /> },
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
