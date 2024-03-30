import { useMutation, useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { AxiosError } from 'axios'
import toast from 'react-hot-toast'

import { getLogin, getRegister, getUser } from '../../services/api'
import { LoginFormValues } from '../../components/login-form'
import { RegisterFormValues } from '../../components/register-form'

export function useRegister() {
  return useMutation({
    mutationFn: (data: RegisterFormValues) => {
      return getRegister(data)
    },
    onSuccess: () => {
      toast.success('Account created successfully!')
      setTimeout(() => {
        window.location.href = '/'
      }, 1500)
    },
    onError: (error: AxiosError) => {
      toast.error(error.response?.data as string)
    },
  })
}

export function useLogin() {
  return useMutation({
    mutationFn: (data: LoginFormValues) => {
      return getLogin(data)
    },
    onSuccess: (response) => {
      Cookies.set('token', response.accessToken, { expires: 0.00694 })
      Cookies.set('hashedCPF', response.hashedCPF, { expires: 0.00694 })
      toast.success('Logged in successfully!')
      setTimeout(() => {
        window.location.href = '/home'
      }, 1500)
    },
    onError: (error: AxiosError) => {
      toast.error(error.response?.data as string)
    },
  })
}

export function useUser(CPF: string) {
  return useQuery({
    queryKey: ['user', CPF],
    queryFn: () => getUser(CPF),
  })
}
