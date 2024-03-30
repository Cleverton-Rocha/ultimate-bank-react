import { useMutation, useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { AxiosError } from 'axios'
import toast from 'react-hot-toast'

import { login, register, getUser } from '../../services/api'
import { LoginFormValues } from '../../components/login-form'
import { RegisterFormValues } from '../../components/register-form'

export function useRegister() {
  return useMutation({
    mutationFn: (data: RegisterFormValues) => {
      return register(data)
    },
    onSuccess: () => {
      toast.success('Account created successfully!')
      setTimeout(() => {
        window.location.href = '/'
      }, 1500)
    },
    onError: (error: AxiosError) => {
      const errorMessage = error.response?.data as string
      toast.error(errorMessage)
    },
  })
}

export function useLogin() {
  return useMutation({
    mutationFn: (data: LoginFormValues) => {
      return login(data)
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
      const errorMessage = error.response?.data as string
      toast.error(errorMessage)
    },
  })
}

export function useUser(hashedCPF: string) {
  return useQuery({
    queryKey: ['user', hashedCPF],
    queryFn: () => getUser(hashedCPF),
  })
}
