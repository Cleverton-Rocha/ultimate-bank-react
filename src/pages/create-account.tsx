import Header from '../components/header'
import RegisterForm from '../components/register-form'

const CreateAccount: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 bg-black md:grid-cols-1 lg:grid-cols-2">
        <Header />
        <RegisterForm />
      </div>
    </>
  )
}
export default CreateAccount
