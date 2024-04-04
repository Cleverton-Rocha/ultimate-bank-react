import Balance from '../components/balance'
import ChangePasswordForm from '../components/change-password-form'
import { RequireAuth } from '../components/requireAuth'
import SideMenu from '../components/side-menu'

const ChangePassword = () => {
  return (
    <>
      <RequireAuth>
        <div className="flex h-screen w-full">
          <SideMenu />

          <div className="h-screen w-full bg-zinc-950">
            <div className="flex h-20 items-center bg-zinc-900 text-white">
              <span className="px-40 text-xl font-medium">Start</span>
            </div>

            <div className="flex flex-col">
              <Balance />
              <ChangePasswordForm />
            </div>
          </div>
        </div>
      </RequireAuth>
    </>
  )
}

export default ChangePassword
