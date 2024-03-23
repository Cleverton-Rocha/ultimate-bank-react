import { Link } from 'react-router-dom'

const MenuItem = (IconComponent: React.ElementType, label: string) => {
  return (
    <div className="flex h-20 w-full items-center gap-4 bg-black p-4">
      <div className="rounded-full border border-lime-500 bg-lime-500 p-3">
        <IconComponent className="text-white" size={24} />
      </div>
      <Link
        to={`/${label}`}
        className="cursor-pointer text-lg font-medium text-white transition duration-200 hover:text-lime-600"
      >
        {label}
      </Link>
    </div>
  )
}
export default MenuItem
