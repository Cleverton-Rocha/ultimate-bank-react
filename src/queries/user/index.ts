import { useMutation, useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { AxiosError } from 'axios'
import toast from 'react-hot-toast'

import {
  login,
  register,
  getUser,
  updateUser,
  updatePassword,
  deleteAccount,
} from '../../services/api'
import { LoginFormValues } from '../../components/login-form'
import { RegisterFormValues } from '../../components/register-form'
import { UpdatePasswordData, UpdateUserData } from '../../utils/types'
import queryClient from '../../services/queryClient'

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
      Cookies.set('token', response.accessToken, { expires: 1 / 12 })
      Cookies.set('hashedCPF', response.hashedCPF, { expires: 1 / 12 })
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

export function useUpdateUser() {
  return useMutation({
    mutationFn: (data: UpdateUserData) => {
      return updateUser(data)
    },
    onSuccess: () => {
      toast.success('Profile updated successfully!')
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error: AxiosError) => {
      const errorMessage = error.response?.data as string
      toast.error(errorMessage)
    },
  })
}

export function useUpdatePassword() {
  return useMutation({
    mutationFn: (data: UpdatePasswordData) => {
      return updatePassword(data)
    },
    onSuccess: () => {
      toast.success('You must login again.')
      toast.success('Password updated successfully!')
      queryClient.invalidateQueries({ queryKey: ['user'] })
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

export function useDeleteAccount() {
  return useMutation({
    mutationFn: (hashedCPF: string) => {
      return deleteAccount(hashedCPF)
    },
    onSuccess: () => {
      toast.success('Account deleted successfully!')
      queryClient.invalidateQueries({ queryKey: ['user'] })
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
