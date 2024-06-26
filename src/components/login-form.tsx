import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import { useState } from 'react'

import { handleCPFInput } from '../lib/utils'
import { useLogin } from '../queries/user'

import PasswordToggle from './password-toggle'

const loginSchema = z.object({
  CPF: z
    .string()
    .length(14, { message: 'Write a valid CPF.' })
    .transform((CPF) => CPF.replace(/\D/g, '')),
  password: z
    .string()
    .min(8, { message: 'Password must have at least 8 characters.' }),
})

export type LoginFormValues = z.infer<typeof loginSchema>

const LoginForm: React.FC = () => {
  const [inputType, setInputType] = useState('password')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })

  const login = useLogin()

  const onSubmit = (data: LoginFormValues) => {
    login.mutate(data)
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-zinc-950">
      <div className="flex h-[500px] w-[380px] flex-col gap-5 text-white">
        <div>
          <h1 className="text-[24px] font-semibold">Access your account</h1>
        </div>

        <div className="flex flex-col gap-8">
          <form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <div>
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
                className="mb-2 mt-3 w-full border-b border-white border-opacity-20 bg-zinc-950 py-2 text-lg font-semibold outline-none"
                onInput={handleCPFInput}
              />
              {errors.CPF && (
                <span className="text-sm text-red-500">
                  {errors.CPF.message}
                </span>
              )}
            </div>

            <div className="mt-8">
              <label
                htmlFor="password"
                className="text-md flex items-center gap-4 font-semibold text-white text-opacity-70"
              >
                <span className="select-none">Password</span>
                <PasswordToggle
                  inputType={inputType}
                  setInputType={setInputType}
                />
              </label>
              <input
                type={inputType}
                {...register('password')}
                placeholder="********"
                className="mb-2 mt-3 w-full border-b border-white border-opacity-20 bg-zinc-950 py-2 text-lg outline-none"
              />

              {errors.password && (
                <span className="text-sm text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="mt-14 flex justify-center">
              <button
                type="submit"
                className="w-2/3 rounded bg-lime-600 p-2 text-xl font-semibold text-white transition duration-200 hover:bg-lime-700"
              >
                <div className="flex items-center justify-center">
                  <span>Login</span>
                </div>
              </button>
            </div>
          </form>
          <div className="flex flex-col items-center justify-center gap-2 p-3 text-sm font-medium">
            <Link
              to={'/forgot-password'}
              className="flex items-center text-lime-600 transition duration-200 hover:text-lime-700"
            >
              <span>Forgot password</span>
              {/*adicionar função de esqueci senha */}
            </Link>
            <span>or</span>
            <Link
              to={'/create-account'}
              className="flex items-center text-lime-600 transition duration-200 hover:text-lime-700"
            >
              <span>Register a new account</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
