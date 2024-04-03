import { Link } from 'react-router-dom'

const UserOptions = () => {
  return (
    <>
      <div className="flex h-[480px] items-center gap-52 border-b border-zinc-800 px-40 text-white ">
        <span className="text-2xl">Options</span>
        <div className="ml-2 flex flex-col gap-8">
          <Link to="/user/profile" className="w-1/3 text-lg font-semibold">
            <span className="text-white opacity-70 transition duration-200 hover:opacity-100">
              Profile
            </span>
          </Link>
          <Link to="/user/profile" className="w-3/3 text-lg font-semibold">
            <span className="text-white opacity-70 transition duration-200 hover:opacity-100">
              Change password
            </span>
          </Link>
          <Link to="/user/profile" className="w-3/3 text-lg font-semibold">
            <span className="text-red-600 transition duration-200 hover:text-red-700">
              Delete my account
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default UserOptions
