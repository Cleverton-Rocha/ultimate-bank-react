import {
  ArrowLeft,
  DollarSignIcon,
  HandCoinsIcon,
  HandshakeIcon,
  User,
} from 'lucide-react'

import RenderMenuItem from '../components/render-menu-item'

const Home = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="w-96 border-r border-stone-800 bg-black">
        <div className="flex h-20 w-full items-center gap-4 bg-lime-600 p-4">
          <div className="rounded-full border border-lime-500 bg-lime-500 p-3">
            <User className="text-white" size={24} />
          </div>
          <span className="text-lg font-medium text-white">Hi, Rocha</span>
        </div>
        <div className="mt-14 h-[700px] w-full">
          {RenderMenuItem(DollarSignIcon, 'Deposit')}
          {RenderMenuItem(HandshakeIcon, 'Withdraw')}
          {RenderMenuItem(HandCoinsIcon, 'Transfer')}
        </div>
        <div className="flex h-24 w-full items-center gap-1 p-5 text-white ">
          <ArrowLeft className="mt-0.5" size={23} />
          <span className="text-xl">Logout</span>
        </div>
      </div>

      <div className="h-screen w-full bg-black">
        <div className="flex h-20 items-center bg-neutral-800 text-white">
          <span className="px-40 text-xl font-medium">Start</span>
        </div>
        <div className="flex h-28 items-center gap-52 border-b border-stone-800 px-40 text-white ">
          <span className="text-2xl">Account</span>
          <div className="flex flex-col justify-center">
            <span className="text-xl">Balance available</span>
            <span>******</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
