import { EyeOffIcon, EyeIcon } from 'lucide-react'
import { useState } from 'react'
import Cookies from 'js-cookie'

import { useUser } from '../queries/user'

const Balance = () => {
  const [showBalance, setShowBalance] = useState<boolean>(false)

  const handleToggleBalance = () => {
    setShowBalance(!showBalance)
  }

  const hashedCPF = Cookies.get('hashedCPF') || ''

  const { data, isLoading } = useUser(hashedCPF)

  return (
    <>
      <div className="flex h-28 items-center gap-52 border-b border-zinc-800 px-40 text-white ">
        <span className="text-2xl">Account</span>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4">
            <span className="text-xl">Balance available</span>
            {showBalance ? (
              <EyeOffIcon
                onClick={handleToggleBalance}
                className="cursor-pointer text-lime-500 transition duration-200 hover:text-lime-600"
                size={20}
              />
            ) : (
              <EyeIcon
                onClick={handleToggleBalance}
                className="cursor-pointer text-lime-500 transition duration-200 hover:text-lime-600"
                size={20}
              />
            )}
          </div>

          {isLoading ? (
            <div className="flex items-center">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-800 border-t-lime-500" />
            </div> //criar componente isLoading
          ) : showBalance ? (
            <span className="font-semibold">${data?.account.balance}</span>
          ) : (
            <span>******</span>
          )}
        </div>
      </div>
    </>
  )
}

export default Balance
