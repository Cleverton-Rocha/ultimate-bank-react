import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Cookies from 'js-cookie'
import { useState } from 'react'

import { useUpdatePassword } from '../queries/user'

import PasswordToggle from './password-toggle'

const passwordSchema = z.object({
  currentPassword: z
    .string()
    .min(8, 'Password must have at least 8 characters.')
    .refine(
      (password) => /[a-z]/.test(password),
      'Password must have at least one lowercase letter.',
    )
    .refine(
      (password) => /[A-Z]/.test(password),
      'Password must have at least one uppercase letter.',
    )
    .refine(
      (password) => /\d/.test(password),
      'Password must have at least one number.',
    ),
  newPassword: z
    .string()
    .min(8, 'Password must have at least 8 characters.')
    .refine(
      (password) => /[a-z]/.test(password),
      'Password must have at least one lowercase letter.',
    )
    .refine(
      (password) => /[A-Z]/.test(password),
      'Password must have at least one uppercase letter.',
    )
    .refine(
      (password) => /\d/.test(password),
      'Password must have at least one number.',
    ),
})

export type PasswordFormValues = z.infer<typeof passwordSchema>

const ChangePasswordForm = () => {
  const hashedCPF = Cookies.get('hashedCPF') ?? ''
  const [inputTypeCurrentPassword, setInputTypeCurrentPassword] =
    useState('password')
  const [inputTypeNewPassword, setInputTypeNewPassword] = useState('password')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
  })

  const updatePassword = useUpdatePassword()

  const onSubmit = (data: PasswordFormValues) => {
    updatePassword.mutate({
      hashedCPF,
      ...data,
    })
    reset()
  }

  return (
    <>
      <div className="flex h-[600px] items-center gap-48 border-b border-zinc-800 px-40 text-white ">
        <span className="ml-2 text-2xl">Password</span>
        <div className="flex w-[300px] flex-col">
          <form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <div>
              <label
                htmlFor=""
                className="text-md flex items-center gap-4 font-semibold text-white text-opacity-70"
              >
                <span className="select-none">Current password</span>
                <PasswordToggle
                  inputType={inputTypeCurrentPassword}
                  setInputType={setInputTypeCurrentPassword}
                />
              </label>
              <input
                type={inputTypeCurrentPassword}
                {...register('currentPassword')}
                placeholder="********"
                className="mb-2 mt-3 w-full border-b border-white border-opacity-20 bg-zinc-950 py-2 text-lg outline-none"
              />

              {errors.currentPassword && (
                <span className="text-sm text-red-500">
                  {errors.currentPassword.message}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="newPassword"
                className="text-md flex items-center gap-4 font-semibold text-white text-opacity-70"
              >
                <span className="select-none">New password</span>
                <PasswordToggle
                  inputType={inputTypeNewPassword}
                  setInputType={setInputTypeNewPassword}
                />
              </label>
              <input
                type={inputTypeNewPassword}
                {...register('newPassword')}
                placeholder="********"
                className="mb-2 mt-3 w-full border-b border-white border-opacity-20 bg-zinc-950 py-2 text-lg outline-none"
              />

              {errors.newPassword && (
                <span className="text-sm text-red-500">
                  {errors.newPassword.message}
                </span>
              )}
            </div>

            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="w-2/3 rounded bg-lime-600 p-2 text-xl font-semibold text-white transition duration-200 hover:bg-lime-700"
              >
                <div className="flex items-center justify-center">
                  <span>Update password</span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ChangePasswordForm
