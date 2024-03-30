import axios from 'axios'
import Cookies from 'js-cookie'

import {
  LoginResponse,
  RegisterResponse,
  User,
  transactionRequest,
  transferRequest,
} from '../utils/types'
import { LoginFormValues } from '../components/login-form'
import { RegisterFormValues } from '../components/register-form'

const token = Cookies.get('token')

const api = axios.create({
  baseURL: 'http://localhost:8080',
})

export async function register(registerData: RegisterFormValues) {
  const { data } = await api.post<RegisterResponse>('/bank/user', registerData)
  return data
}

export async function login(loginData: LoginFormValues) {
  const { data } = await api.post<LoginResponse>('/login', loginData)
  return data
}

export async function getUser(hashedCPF: string) {
  const { data } = await api.get<User>(`/bank/user/${hashedCPF}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return data
}

export async function transaction(transactionData: transactionRequest) {
  const { data } = await api.post(
    '/bank/account/transaction',
    transactionData,
    { headers: { Authorization: `Bearer ${token}` } },
  )
  return data
}

export async function transfer(transferData: transferRequest) {
  const { data } = await api.post('/bank/account/transfer', transferData, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return data
}
