import { Link } from 'react-router-dom'

import { cn } from '../lib/utils'

type MenuItemProps = {
  Icon: React.ElementType
  href: string
  label: string
}

const MenuItem: React.FC<MenuItemProps> = ({ Icon, href, label }) => {
  const { pathname } = window.location

  const isActive = href === pathname

  return (
    <nav className="flex h-20 w-full items-center gap-4 bg-zinc-950 p-4">
      <div className="flex items-center gap-2">
        <div className="rounded border border-lime-600 bg-lime-600 p-2">
          <Icon className="text-white" size={25} />
        </div>
        <Link
          to={href}
          className={cn(
            'cursor-pointer text-lg font-medium text-white transition duration-200 hover:text-lime-600',
            isActive ? 'text-lime-500' : '',
          )}
        >
          {label}
        </Link>
      </div>
    </nav>
  )
}
export default MenuItem
