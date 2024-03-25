import Header from '../components/header'
import LoginForm from '../components/login-form'

const Login: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 bg-black md:grid-cols-1 lg:grid-cols-2">
        <Header />
        <LoginForm />
      </div>
    </>
  )
}

export default Login
