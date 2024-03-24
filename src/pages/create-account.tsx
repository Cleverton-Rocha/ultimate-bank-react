import RegisterForm from '../components/register-form'

const CreateAccount: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 bg-black md:grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 className="logo absolute cursor-pointer bg-transparent p-5 text-4xl text-lime-500 transition duration-200 hover:text-lime-600">
            UB.
          </h1>
          <img
            src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Mulher com um notebook"
            className="hidden h-screen w-full object-cover object-center lg:block"
          />
        </div>
        <RegisterForm />
      </div>
    </>
  )
}
export default CreateAccount
