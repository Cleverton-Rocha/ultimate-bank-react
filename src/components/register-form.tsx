import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Link } from 'react-router-dom'

import { handleCPFInput, handleNameInput } from '../lib/utils'

const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, 'Name must have at least 3 characters.')
      .max(25, 'Name must have at most 15 characters.')
      .transform((name) => name.replace(/[0-9]/g, '')),
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

type RegisterFormValues = z.infer<typeof registerSchema>

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = (data: RegisterFormValues) => {
    console.log(data)
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center bg-zinc-950">
      <section className="flex h-[650px] w-[380px] flex-col gap-5 text-white">
        <div>
          <h1 className="text-[24px] font-semibold">Create your account</h1>
        </div>

        <div className="flex flex-col">
          <form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <div className="mb-3">
              <label
                htmlFor="name"
                className="text-md font-semibold text-white text-opacity-70"
              >
                Name
              </label>
              <input
                type="text"
                {...register('name')}
                className="mb-1 w-full border-b border-white border-opacity-20 bg-zinc-950 py-2 text-lg font-semibold outline-none"
                onInput={handleNameInput}
              />
              {errors.name && (
                <span className="text-sm text-red-500">
                  {errors.name.message}
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
                className="text-md font-semibold text-white text-opacity-70"
              >
                Password
              </label>
              <input
                type="password"
                {...register('password')}
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
                className="text-md font-semibold text-white text-opacity-70"
              >
                Confirm password
              </label>
              <input
                type="password"
                {...register('confirmPassword')}
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
      </section>
    </main>
  )
}

export default RegisterForm
