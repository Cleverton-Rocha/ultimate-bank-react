import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { handleCPFInput, handleNameInput } from '../lib/utils'
import { useRegister } from '../queries/user'

import PasswordToggle from './password-toggle'

const registerSchema = z
  .object({
    firstName: z
      .string()
      .min(1, 'First name must have at least 1 characters.')
      .transform((firstName) => firstName.replace(/[0-9]/g, '')),
    lastName: z
      .string()
      .min(1, 'Last Name must have at least 1 characters.')
      .transform((lastName) => lastName.replace(/[0-9]/g, '')),
    email: z.string().email('Write a valid email.'),
    CPF: z
      .string()
      .length(14, 'Write a valid CPF.')
      .transform((CPF) => CPF.replace(/\D/g, '')),
    password: z.string().min(8, 'Password must have at least 8 characters.'),
    confirmPassword: z
      .string()
      .min(8, 'Password must have at least 8 characters.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match.',
    path: ['confirmPassword'],
  })

export type RegisterFormValues = z.infer<typeof registerSchema>

const RegisterForm: React.FC = () => {
  const [inputType, setInputType] = useState('password')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  })

  const registerAccount = useRegister()

  const onSubmit = (data: RegisterFormValues) => {
    registerAccount.mutate(data)
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-zinc-950">
      <div className="flex h-[750px] w-[380px] flex-col gap-5 text-white">
        <div>
          <h1 className="text-[24px] font-semibold">Create your account</h1>
        </div>

        <div className="flex flex-col">
          <form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <div className="mb-3">
              <label
                htmlFor="firstName"
                className="text-md font-semibold text-white text-opacity-70"
              >
                First name
              </label>
              <input
                type="text"
                {...register('firstName')}
                placeholder="Your first name"
                className="mb-1 w-full border-b border-white border-opacity-20 bg-zinc-950 py-2 text-lg font-semibold outline-none"
                onInput={handleNameInput}
              />
              {errors.firstName && (
                <span className="text-sm text-red-500">
                  {errors.firstName.message}
                </span>
              )}
            </div>

            <div className="mb-3">
              <label
                htmlFor="name"
                className="text-md font-semibold text-white text-opacity-70"
              >
                Last name
              </label>
              <input
                type="text"
                {...register('lastName')}
                placeholder="Your last name"
                className="mb-1 w-full border-b border-white border-opacity-20 bg-zinc-950 py-2 text-lg font-semibold outline-none"
                onInput={handleNameInput}
              />
              {errors.lastName && (
                <span className="text-sm text-red-500">
                  {errors.lastName.message}
                </span>
              )}
            </div>

            <div className="mb-3">
              <label
                htmlFor="email"
                className="text-md font-semibold text-white text-opacity-70"
              >
                Email
              </label>
              <input
                type="text"
                {...register('email')}
                placeholder="example@email.com"
                className="mb-0.5 mt-3 w-full border-b border-white border-opacity-20 bg-zinc-950 py-2 text-lg font-semibold outline-none"
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="mb-3">
              <label
                htmlFor="CPF"
                className="text-md font-semibold text-white text-opacity-70"
              >
                CPF
              </label>
              <input
                type="text"
                {...register('CPF')}
                placeholder="000.000.000-00"
                className="mb-0.5 mt-3 w-full border-b border-white border-opacity-20 bg-zinc-950 py-2 text-lg font-semibold outline-none"
                onInput={handleCPFInput}
              />
              {errors.CPF && (
                <span className="text-sm text-red-500">
                  {errors.CPF.message}
                </span>
              )}
            </div>

            <div className="mb-3">
              <label
                htmlFor="password"
                className="text-md flex items-center gap-4 font-semibold text-white text-opacity-70"
              >
                <span>Password</span>
                <PasswordToggle
                  inputType={inputType}
                  setInputType={setInputType}
                />
              </label>
              <input
                type={inputType}
                {...register('password')}
                placeholder="********"
                className="mb-0.5 mt-3 w-full border-b border-white border-opacity-20 bg-zinc-950 py-2 text-lg outline-none"
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="mb-3">
              <label
                htmlFor="confirmPassword"
                className="text-md flex items-center gap-4 font-semibold text-white text-opacity-70"
              >
                <span>Confirm password</span>
              </label>
              <input
                type={inputType}
                {...register('confirmPassword')}
                placeholder="********"
                className="mb-0.5 mt-3 w-full border-b border-white border-opacity-20 bg-zinc-950 py-2 text-lg outline-none"
              />
              {errors.confirmPassword && (
                <span className="text-sm text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            <div className="mt-14 flex justify-center">
              <button
                type="submit"
                className="w-2/3 rounded bg-lime-600 p-2 text-xl font-semibold text-white transition duration-200 hover:bg-lime-700"
              >
                <div className="flex items-center justify-center">
                  <span>Create account</span>
                </div>
              </button>
            </div>
          </form>
          <div className="flex flex-col items-center justify-center gap-2 p-3 text-sm font-medium">
            <span>or</span>
            <Link
              to={'/'}
              className="flex items-center text-lime-600 transition duration-200 hover:text-lime-700"
            >
              <span>Back to login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
