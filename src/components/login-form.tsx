import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'

const loginSchema = z.object({
  CPF: z.string().length(11, { message: 'CPF must have 11 characters.' }),
  password: z
    .string()
    .min(8, { message: 'Password must have at least 8 characters.' }),
})

type LoginFormValues = z.infer<typeof loginSchema>

const LoginForm = () => {
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      CPF: '',
      password: '',
    },
  })

  const navigate = useNavigate()

  const onSubmit = (values: LoginFormValues) => {
    console.log(values)
    setLoading(true)
    navigate('/home')
  }

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center bg-black">
        <div className="flex h-[500px] w-[380px] flex-col gap-5 text-white">
          <div>
            <h1 className="text-[24px] font-semibold">Access your account</h1>
          </div>

          <div className="flex flex-col gap-8">
            <form onSubmit={handleSubmit((d) => onSubmit(d))}>
              <div>
                <label
                  htmlFor="CPF"
                  className="text-md font-semibold text-white text-opacity-70"
                >
                  CPF
                </label>
                <input
                  {...register('CPF')}
                  className="mb-2 mt-3 w-full border-b border-white border-opacity-20 bg-black py-2 text-lg font-semibold outline-none"
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
                <br />
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
                  disabled={loading}
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
