import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Cookies from 'js-cookie'
import { useState } from 'react'

import { handleNameInput } from '../lib/utils'
import { useUpdateUser, useUser } from '../queries/user'

import PasswordToggle from './password-toggle'

const profileSchema = z.object({
  firstName: z
    .string()
    .min(1, 'Name must have at least 1 characters.')
    .transform((firstName) => firstName.replace(/[0-9]/g, '')),
  lastName: z
    .string()
    .min(1, 'Name must have at least 1 characters.')
    .transform((lastName) => lastName.replace(/[0-9]/g, '')),
  email: z.string().email('Write a valid email.'),
  password: z
    .string()
    .min(8, 'Password must have at least 8 characters.')
    .nullable(),
})

type ProfileFormValues = z.infer<typeof profileSchema>

const ProfileForm = () => {
  const [inputType, setInputType] = useState('password')
  const hashedCPF = Cookies.get('hashedCPF') ?? ''
  const user = useUser(hashedCPF)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: user.data?.firstName ?? 'First name',
      lastName: user.data?.lastName ?? 'Last name',
      email: user.data?.email ?? 'Email',
    },
  })

  const updateUser = useUpdateUser()

  const onSubmit = (data: ProfileFormValues) => {
    updateUser.mutate({
      hashedCPF,
      ...data,
    })
    reset()
  }

  return (
    <>
      <div className="flex h-[600px] items-center gap-56 border-b border-zinc-800 px-40 text-white ">
        <span className="ml-1 text-2xl">Profile</span>
        <div className=" flex w-[300px] flex-col">
          <form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <div>
              <label
                htmlFor="firstName"
                className="text-md font-semibold text-white text-opacity-70"
              >
                First name
              </label>
              <input
                type="text"
                {...register('firstName')}
                placeholder=""
                className="mb-2 mt-3 w-full border-b border-white border-opacity-20 bg-zinc-950 py-2 text-lg font-semibold outline-none"
                onInput={handleNameInput}
              />
              {errors.firstName && (
                <span className="text-sm text-red-500">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="text-md font-semibold text-white text-opacity-70"
              >
                Last name
              </label>
              <input
                type="text"
                {...register('lastName')}
                placeholder=""
                className="mb-2 mt-3 w-full border-b border-white border-opacity-20 bg-zinc-950 py-2 text-lg font-semibold outline-none"
                onInput={handleNameInput}
              />
              {errors.lastName && (
                <span className="text-sm text-red-500">
                  {errors.lastName.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-md font-semibold text-white text-opacity-70"
              >
                Email
              </label>
              <input
                type="text"
                {...register('email')}
                placeholder=""
                className="mb-2 mt-3 w-full border-b border-white border-opacity-20 bg-zinc-950 py-2 text-lg font-semibold outline-none"
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  {errors.email.message}
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
            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="w-2/3 rounded bg-lime-600 p-2 text-xl font-semibold text-white transition duration-200 hover:bg-lime-700"
              >
                <div className="flex items-center justify-center">
                  <span>Update changes</span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ProfileForm
