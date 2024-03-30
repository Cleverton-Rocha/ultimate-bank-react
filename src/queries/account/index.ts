import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import toast from 'react-hot-toast'

import { transaction, transfer } from '../../services/api'
import { transactionRequest, transferRequest } from '../../utils/types'
import queryClient from '../../services/queryClient'

export function useTransaction() {
  return useMutation({
    mutationFn: (data: transactionRequest) => {
      return transaction(data)
    },
    onSuccess: () => {
      toast.success('Transaction completed successfully!')
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error: AxiosError) => {
      const errorMessage = error.response?.data as string
      toast.error(errorMessage)
    },
  })
}

export function useTransfer() {
  return useMutation({
    mutationFn: (data: transferRequest) => {
      return transfer(data)
    },
    onSuccess: () => {
      toast.success('Transfer completed successfully!')
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error: AxiosError) => {
      const errorMessage = error.response?.data as string
      toast.error(errorMessage)
    },
  })
}
