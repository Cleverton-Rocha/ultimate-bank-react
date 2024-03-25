import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import './index.css'
import Home from './pages/home.tsx'
import Login from './pages/login.tsx'
import CreateAccount from './pages/create-account.tsx'
import Deposit from './pages/deposit.tsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/create-account',
        element: <CreateAccount />,
      },
      {
        path: '/deposit',
        element: <Deposit />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
