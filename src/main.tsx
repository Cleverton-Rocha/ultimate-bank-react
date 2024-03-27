import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import './index.css'
import Home from './pages/home.tsx'
import Login from './pages/login.tsx'
import CreateAccount from './pages/create-account.tsx'
import Deposit from './pages/deposit.tsx'
import Transfer from './pages/transfer.tsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/create-account',
        element: <CreateAccount />,
      },
      {
        path: '/deposit',
        element: <Deposit />,
      },
      {
        path: '/transfer',
        element: <Transfer />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
