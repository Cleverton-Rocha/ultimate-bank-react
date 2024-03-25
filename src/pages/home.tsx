import { useState } from 'react'
import {
  ArrowLeft,
  DollarSignIcon,
  EyeIcon,
  EyeOffIcon,
  HandCoinsIcon,
  HandshakeIcon,
  User,
} from 'lucide-react'

import MenuItem from '../components/menu-item'

const Home: React.FC = () => {
  const [showBalance, setShowBalance] = useState<boolean>(false)
  const amount = '15.000'

  const handleToggleBalance = () => {
    setShowBalance(!showBalance)
  }

  return (
    <main className="flex h-screen w-full">
      <section className="w-80 border-r border-zinc-800 bg-zinc-950">
        <div className="flex h-20 w-full items-center gap-4 bg-lime-600 p-4">
          <div className="rounded-full border border-lime-500 bg-lime-500 p-3">
            <User className="text-white" size={24} />
          </div>
          <span className="text-lg font-medium text-white">Hi, Rocha</span>
        </div>

        <div className="mt-14 h-[700px] w-full ">
          {MenuItem({ Icon: DollarSignIcon, label: 'Deposit' })}
          {MenuItem({ Icon: HandshakeIcon, label: 'Withdraw' })}
          {MenuItem({ Icon: HandCoinsIcon, label: 'Transfer' })}
        </div>

        <div className="flex h-24 w-full items-center gap-1 p-5 text-white ">
          <ArrowLeft className="mt-0.5" size={23} />
          <span className="text-xl">Logout</span>
          {/* Handle logout  */}
        </div>
      </section>

      <section className="h-screen w-full bg-zinc-950">
        <div className="flex h-20 items-center bg-zinc-900 text-white">
          <span className="px-40 text-xl font-medium">Start</span>
        </div>

        <div className="flex flex-col">
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

          <div className="flex h-96 items-center gap-44 border-b border-zinc-800 px-40 text-white ">
            <span className="text-2xl">Credit card</span>
            <div className="flex items-center justify-center gap-8">
              <div className="w-[350px] rounded-lg border border-lime-950 bg-gradient-to-r from-emerald-600 via-lime-500 to-lime-700 p-8 font-medium text-white shadow-2xl shadow-lime-900">
                <div className="mb-2 flex justify-end">
                  <img
                    src="https://img.icons8.com/color/48/000000/visa.png"
                    alt="Visa"
                    className="h-10 w-10"
                  />
                </div>

                <span className="mb-4 text-lg">1234 5678 9012 3456</span>
                <div className="mb-4 flex justify-between">
                  <span className="text-sm ">Cleverton Rocha</span>
                  <span className="text-sm ">12/24</span>
                </div>

                <span className="text-sm ">CVV - 123</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
