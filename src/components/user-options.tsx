import { useState } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

import { useDeleteAccount } from '../queries/user'
const UserOptions = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const deleteAccount = useDeleteAccount()
  const hashedCPF = Cookies.get('hashedCPF') ?? ''

  const handleDeleteAccount = () => {
    deleteAccount.mutate(hashedCPF)
    setShowDeleteModal(false)
  }

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
          <Link to="/user/password" className="w-3/3 text-lg font-semibold">
            <span className="text-white opacity-70 transition duration-200 hover:opacity-100">
              Change password
            </span>
          </Link>
          <button
            className="w-3/3 text-lg font-semibold text-red-600 transition duration-200 hover:text-red-700"
            onClick={() => setShowDeleteModal(true)}
          >
            Delete my account
          </button>
        </div>
      </div>

      {showDeleteModal && (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-zinc-950 bg-opacity-75">
          <div className="rounded-lg bg-zinc-900 p-8 text-white">
            <span className="font-medium">
              Are you sure you want to{' '}
              <span className="text-red-600">delete</span> your account?
              <br /> This action is irreversible.
            </span>
            <div className="mt-4 flex justify-end">
              <button
                className="mr-2 rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                onClick={handleDeleteAccount}
              >
                Yes
              </button>
              <button
                className="rounded bg-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-400"
                onClick={() => setShowDeleteModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default UserOptions
