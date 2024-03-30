import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Cookies from 'js-cookie'

import { handleAmountInput } from '../lib/utils'
import { useTransaction } from '../queries/account'

const withdrawSchema = z.object({
  amount: z
    .string()
    .min(1, { message: 'Amount must be greater than 0.' })
    .max(8, { message: 'Amount must have at most 6 characters.' })
    .transform((amount) => amount.replace(/\D/g, '')),
  description: z
    .string()
    .min(1, { message: 'Description must have at least 1 character.' }),
})

type WithdrauFormValues = z.infer<typeof withdrawSchema>

const WithdrawForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WithdrauFormValues>({
    resolver: zodResolver(withdrawSchema),
  })

  const transaction = useTransaction()

  const hashedCPF = Cookies.get('hashedCPF') ?? ''
  const onSubmit = (data: WithdrauFormValues) => {
    transaction.mutate({
      hashedCPF,
      amount: Number(data.amount),
      type: 'Withdraw',
      description: data.description,
    })
    reset()
  }

  return (
    <>
      <div className="flex h-96 items-center gap-48 border-b border-zinc-800 px-40 text-white ">
        <span className="text-2xl">Withdraw</span>
        <div className="flex w-[300px] flex-col">
          <form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <div>
              <label
                htmlFor="amount"
                className="text-md font-semibold text-white text-opacity-70"
              >
                Amount
              </label>
              <input
                type="text"
                {...register('amount')}
                placeholder="$0"
                className="mb-2 mt-3 w-full border-b border-white border-opacity-20 bg-zinc-950 py-2 text-lg font-semibold outline-none"
                onInput={handleAmountInput}
              />
              {errors.amount && (
                <span className="text-sm text-red-500">
                  {errors.amount.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="description"
                className="text-md font-semibold text-white text-opacity-70"
              >
                Description
              </label>
              <input
                type="text"
                {...register('description')}
                placeholder="Eg. Withdraw for bill payment."
                className="mb-2 mt-3 w-full border-b border-white border-opacity-20 bg-zinc-950 py-2 text-lg font-semibold outline-none"
              />
              {errors.description && (
                <span className="text-sm text-red-500">
                  {errors.description.message}
                </span>
              )}
            </div>
            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="w-2/3 rounded bg-lime-600 p-2 text-xl font-semibold text-white transition duration-200 hover:bg-lime-700"
              >
                <div className="flex items-center justify-center">
                  <span>Withdraw</span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default WithdrawForm
