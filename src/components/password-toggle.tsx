import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

type PasswordToggleProps = {
  inputType: string
  setInputType: (inputType: string) => void
}

const PasswordToggle: React.FC<PasswordToggleProps> = ({
  inputType,
  setInputType,
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
    if (inputType === 'password') {
      setInputType('text')
    } else {
      setInputType('password')
    }
  }

  return (
    <div className="password-toggle">
      {showPassword ? (
        <EyeOff
          size={20}
          className="mt-0.5 cursor-pointer text-lime-500 transition duration-200 hover:text-lime-600"
          onClick={togglePasswordVisibility}
        />
      ) : (
        <Eye
          size={20}
          className="mt-0.5 cursor-pointer text-lime-500 transition duration-200 hover:text-lime-600"
          onClick={togglePasswordVisibility}
        />
      )}
    </div>
  )
}

export default PasswordToggle
