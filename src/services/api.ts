import axios from 'axios'
import Cookies from 'js-cookie'

import { LoginResponse, RegisterResponse, User } from '../utils/types'
import { LoginFormValues } from '../components/login-form'
import { RegisterFormValues } from '../components/register-form'

const token = Cookies.get('token')

const api = axios.create({
  baseURL: 'http://localhost:8080',
})

export async function getRegister(registerData: RegisterFormValues) {
  const { data } = await api.post<RegisterResponse>('/bank/user', registerData)
  return data
}

export async function getLogin(loginData: LoginFormValues) {
  const { data } = await api.post<LoginResponse>('/login', loginData)
  return data
}

export async function getUser(hashedCPF: string) {
  const { data } = await api.get<User>(`/bank/user/${hashedCPF}`, {
    headers: { Authorization: `Bearer ${token}` },
  })

  return data
}
