import Balance from '../components/balance'
import SideMenu from '../components/side-menu'
import TransferForm from '../components/transfer-form'

const Transfer = () => {
  return (
    <>
      <div className="flex h-screen w-full">
        <SideMenu />

        <div className="h-screen w-full bg-zinc-950">
          <div className="flex h-20 items-center bg-zinc-900 text-white">
            <span className="px-40 text-xl font-medium">Start</span>
          </div>

          <div className="flex flex-col">
            <Balance />
            <TransferForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Transfer
