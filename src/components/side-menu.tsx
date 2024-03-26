import {
  ArrowLeft,
  DollarSignIcon,
  HandCoinsIcon,
  HandshakeIcon,
  LandmarkIcon,
  User,
} from 'lucide-react'

import MenuItem from './menu-item'

const SideMenu = () => {
  return (
    <>
      <div className="w-80 border-r border-zinc-800 bg-zinc-950">
        <div className="flex h-20 w-full items-center gap-4 rounded-s bg-lime-600 p-4">
          <div className="rounded-full border border-lime-500 bg-lime-500 p-3">
            <User className="text-white" size={24} />
          </div>
          <span className="text-lg font-medium text-white">Hi, Rocha</span>
        </div>

        <div className="mt-14 h-[700px] w-full ">
          <MenuItem href="/home" label="Home" Icon={LandmarkIcon} />
          <MenuItem href="/transfer" label="Transfer" Icon={HandCoinsIcon} />
          <MenuItem href="/deposit" label="Deposit" Icon={DollarSignIcon} />
          <MenuItem href="/withdraw" label="Withdraw" Icon={HandshakeIcon} />
        </div>

        <div className="flex h-24 w-full items-center gap-1 p-5 text-white ">
          <ArrowLeft className="mt-0.5" size={23} />
          <span className="text-xl">Logout</span>
          {/* Handle logout  */}
        </div>
      </div>
    </>
  )
}

export default SideMenu
