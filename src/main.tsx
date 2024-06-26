import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'

import App from './App.tsx'
import './index.css'
import Home from './pages/home.tsx'
import Login from './pages/login.tsx'
import CreateAccount from './pages/create-account.tsx'
import Deposit from './pages/deposit.tsx'
import Transfer from './pages/transfer.tsx'
import Withdraw from './pages/withdraw.tsx'
import queryClient from './services/queryClient.ts'
import Transactions from './pages/transactions.tsx'
import User from './pages/user.tsx'
import Profile from './pages/profile.tsx'
import ChangePassword from './pages/change-password.tsx'

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
      {
        path: '/withdraw',
        element: <Withdraw />,
      },
      {
        path: '/transactions',
        element: <Transactions />,
      },
      {
        path: '/user',
        element: <User />,
      },
      {
        path: '/user/profile',
        element: <Profile />,
      },
      {
        path: '/user/password',
        element: <ChangePassword />,
      },
      {
        path: '*',
        element: <div>404 Not Found</div>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
