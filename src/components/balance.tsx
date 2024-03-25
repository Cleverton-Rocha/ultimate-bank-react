import { EyeOffIcon, EyeIcon } from 'lucide-react'
import { useState } from 'react'

const Balance = () => {
  const [showBalance, setShowBalance] = useState<boolean>(false)

  const amount = '15.000'
  const handleToggleBalance = () => {
    setShowBalance(!showBalance)
  }
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

          {showBalance ? (
            <span className="font-semibold">${amount}</span>
          ) : (
            <span>******</span>
          )}
        </div>
      </div>
    </>
  )
}

export default Balance
