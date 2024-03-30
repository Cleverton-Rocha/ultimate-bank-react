import Balance from '../components/balance'
import Card from '../components/card'
import { RequireAuth } from '../components/requireAuth'
import SideMenu from '../components/side-menu'

const Home: React.FC = () => {
  return (
    <RequireAuth>
      <div className="flex h-screen w-full">
        <SideMenu />

        <div className="h-screen w-full bg-zinc-950">
          <div className="flex h-20 items-center bg-zinc-900 text-white">
            <span className="rounded-e px-40 text-xl font-medium">Start</span>
          </div>

          <div className="flex flex-col">
            <Balance />
            <Card />
          </div>
        </div>
      </div>
    </RequireAuth>
  )
}

export default Home
