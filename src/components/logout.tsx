import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Logout = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
    Cookies.remove('token')
    Cookies.remove('hashedCPF')
  }

  return (
    <>
      <div
        onClick={() => handleLogout()}
        className="flex h-24 w-32 cursor-pointer items-center gap-1 p-5 text-white transition duration-200 hover:text-lime-500"
      >
        <ArrowLeft className="mt-0.5" size={23} />
        <span className="text-xl">Logout</span>
      </div>
    </>
  )
}

export default Logout
