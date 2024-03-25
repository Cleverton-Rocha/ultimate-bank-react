import { Link } from 'react-router-dom'

type MenuItemProps = {
  Icon: React.ElementType
  label: string
}

const MenuItem: React.FC<MenuItemProps> = ({ Icon, label }) => {
  return (
    <div className="flex h-20 w-full items-center gap-4 bg-zinc-950 p-4">
      <div className="rounded border border-lime-500 bg-lime-500 p-3">
        <Icon className="text-white" size={24} />
      </div>
      <Link
        to={`/${label.toLocaleLowerCase()}`}
        className="cursor-pointer text-lg font-medium text-white transition duration-200 hover:text-lime-600"
      >
        {label}
      </Link>
    </div>
  )
}
export default MenuItem
