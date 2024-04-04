import { ChevronLeft } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

interface SessionHeaderProps {
  title: string
}

const SessionHeader: React.FC<SessionHeaderProps> = ({ title }) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="ml-1 text-2xl">{title}</span>
      <Link
        className="flex items-center justify-center text-lime-500 transition duration-200 hover:text-lime-600"
        to="/user"
      >
        <ChevronLeft className="mt-0.5" size={20} />
        <span className="">Back</span>
      </Link>
    </div>
  )
}

export default SessionHeader
