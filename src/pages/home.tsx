import Balance from '../components/balance'
import Card from '../components/card'
import SideMenu from '../components/side-menu'

const Home: React.FC = () => {
  return (
    <main className="flex h-screen w-full">
      <SideMenu />

      <section className="h-screen w-full bg-zinc-950">
        <div className="flex h-20 items-center bg-zinc-900 text-white">
          <span className="px-40 text-xl font-medium">Start</span>
        </div>

        <div className="flex flex-col">
          <Balance />
          <Card />
        </div>
      </section>
    </main>
  )
}

export default Home
