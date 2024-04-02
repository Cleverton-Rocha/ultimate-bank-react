import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Cookies from 'js-cookie'

import { handleNameInput } from '../lib/utils'
import { useUser } from '../queries/user'

const profileSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Amount must be greater than 0.' })
    .max(8, { message: 'Amount must have at most 6 characters.' })
    .transform((amount) => amount.replace(/\D/g, '')),
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .min(1, { message: 'Description must have at least 1 character.' })
    .max(50, { message: 'Description must have at most 50 characters.' }),
})

type ProfileFormValues = z.infer<typeof profileSchema>

const ProfileForm = () => {
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
      name: user.data?.firstName ?? 'Name',
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: ProfileFormValues) => {
    reset()
  }

  return (
    <>
      <div className="flex h-96 items-center gap-56 border-b border-zinc-800 px-40 text-white ">
        <span className="ml-1 text-2xl">Profile</span>
        <div className=" flex w-[300px] flex-col">
          <form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <div>
              <label
                htmlFor="name"
                className="text-md font-semibold text-white text-opacity-70"
              >
                Name
              </label>
              <input
                type="text"
                {...register('name')}
                placeholder={user.data?.firstName ?? 'Name'}
                className="mb-2 mt-3 w-full border-b border-white border-opacity-20 bg-zinc-950 py-2 text-lg font-semibold outline-none"
                onInput={handleNameInput}
              />
              {errors.name && (
                <span className="text-sm text-red-500">
                  {errors.name.message}
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
                placeholder="Eg. Withdraw for bill payment."
                className="mb-2 mt-3 w-full border-b border-white border-opacity-20 bg-zinc-950 py-2 text-lg font-semibold outline-none"
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  {errors.email.message}
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
