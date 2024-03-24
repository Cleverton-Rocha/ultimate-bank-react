import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

const loginSchema = z.object({
  CPF: z
    .string()
    .length(14, { message: 'Write a valid CPF.' })
    .transform((CPF) => CPF.replace(/\D/g, '')),
  password: z
    .string()
    .min(8, { message: 'Password must have at least 8 characters.' }),
})

type LoginFormValues = z.infer<typeof loginSchema>

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })

  const formatCPF = (CPF: string) => {
    let value = CPF.replace(/\D/g, '')
    value = value.slice(0, 11)

    if (value.length > 3 && value.length <= 6) {
      value = `${value.slice(0, 3)}.${value.slice(3)}`
    } else if (value.length > 6 && value.length <= 9) {
      value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6)}`
    } else if (value.length > 9) {
      value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}-${value.slice(9)}`
    }
    return value
  }

  const handleCPFInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const CPF = e.target
    CPF.value = formatCPF(CPF.value)
  }

  const onSubmit = (data: LoginFormValues) => {
    console.log(data)
  }

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center bg-black">
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
                  className="mb-2 mt-3 w-full border-b border-white border-opacity-20 bg-black py-2 text-lg font-semibold outline-none"
                  maxLength={14}
                  onInput={handleCPFInput}
                />
                <div className="text-red-500">
                  {errors.CPF?.message && <>{errors.CPF?.message}</>}
                </div>
              </div>

              <div className="mt-8">
                <label
                  htmlFor="password"
                  className="text-md font-semibold text-white text-opacity-70"
                >
                  Password
                </label>
                <input
                  type="password"
                  {...register('password')}
                  className="mb-2 mt-3 w-full border-b border-white border-opacity-20 bg-black py-2 text-lg outline-none"
                />
                <div className="text-red-500">
                  {errors.password?.message && <>{errors.password?.message}</>}
                </div>
                <Link
                  to={'/forgot-password'}
                  className="text-lime-600 transition duration-200 hover:text-lime-700"
                >
                  Forgot password
                </Link>
              </div>

              <div className="mt-14 flex justify-center">
                <button
                  type="submit"
                  className="w-full rounded-full bg-lime-600 p-3 text-xl font-semibold text-white transition duration-200 hover:bg-lime-700"
                >
                  <div className="flex items-center justify-center gap-3">
                    <span>Login</span>
                    <ArrowRight className="mt-1" size={24} />
                  </div>
                </button>
              </div>
            </form>
            <div className="flex flex-col items-center justify-center gap-10 p-3 font-medium text-lime-600 transition duration-200 hover:text-lime-700">
              <Link to={'/create-account'}>Create account</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginForm
