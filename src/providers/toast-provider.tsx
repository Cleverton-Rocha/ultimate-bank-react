import { Toaster } from 'react-hot-toast'

export const ToasterProvider = () => {
  return (
    <Toaster
      toastOptions={{
        className: 'bg-zinc-950 text-white',
      }}
    />
  )
}
