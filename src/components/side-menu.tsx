import {
  DollarSignIcon,
  HandCoinsIcon,
  HandshakeIcon,
  LandmarkIcon,
  Receipt,
  User,
} from 'lucide-react'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'

import { useUser } from '../queries/user'

import MenuItem from './menu-item'
import Logout from './logout'

const SideMenu: React.FC = () => {
  const hashedCPF = Cookies.get('hashedCPF') ?? ''

  const { data, isLoading } = useUser(hashedCPF)

  return (
    <>
      <div className="w-80 border-r border-zinc-800 bg-zinc-950">
        <div className="flex h-20 w-full items-center gap-4 rounded-s bg-lime-600 p-4">
          <Link
            to="/user/profile"
            className="rounded-full border border-lime-500 bg-lime-500 p-3"
          >
            <User className="text-white" size={24} />
          </Link>
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-800 border-t-lime-500" />
            </div>
          ) : (
            <span className="text-lg font-medium text-white">{`Welcome, ${data?.firstName}`}</span>
          )}
        </div>

        <div className="mt-14 h-[700px] w-full ">
          <MenuItem href="/home" label="Home" Icon={LandmarkIcon} />
          <MenuItem href="/transfer" label="Transfer" Icon={HandshakeIcon} />
          <MenuItem href="/deposit" label="Deposit" Icon={DollarSignIcon} />
          <MenuItem href="/withdraw" label="Withdraw" Icon={HandCoinsIcon} />
          <MenuItem href="/transactions" label="Transactions" Icon={Receipt} />
          <MenuItem href="/user/profile" label="Profile" Icon={User} />
        </div>
        <Logout />
      </div>
    </>
  )
}
export default SideMenu
