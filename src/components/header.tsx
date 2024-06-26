const Header = () => {
  return (
    <>
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
    </>
  )
}

export default Header
