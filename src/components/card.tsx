import Cookies from 'js-cookie'

import { useUser } from '../queries/user'

const Card = () => {
  const hashedCPF = Cookies.get('hashedCPF') ?? ''
  const { data, isLoading } = useUser(hashedCPF)

  return (
    <div className="flex h-96 items-center gap-44 border-b border-zinc-800 px-40 text-white ">
      <span className="text-2xl">Credit card</span>
      <div className="flex items-center justify-center gap-8">
        <div className="w-[350px] rounded-lg border border-lime-950 bg-gradient-to-r from-lime-500 via-lime-600 to-lime-700 p-8 font-medium text-white shadow-2xl shadow-lime-900">
          <div className="mb-2 flex justify-end">
            <img
              src="https://img.icons8.com/color/48/000000/visa.png"
              alt="Visa"
              className="h-10 w-10"
            />
          </div>

          <span className="mb-4 text-lg">1234 5678 9012 3456</span>
          <div className="mb-4 flex justify-between">
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-800 border-t-lime-500" />
              </div>
            ) : (
              <span className="text-sm ">{`${data?.firstName} ${data?.lastName}`}</span>
            )}
            <span className="text-sm ">12/28</span>
          </div>

          <span className="text-sm ">CVV - 123</span>
        </div>
      </div>
    </div>
  )
}

export default Card
