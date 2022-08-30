import Formulario from "./Formulario";

const Login = ({users, setIsValidLogin, setUserActive}) => {

  return (
    <div className=" container my-0 mx-auto w-5/6 flex h-screen justify-center items-center sm:w-4/6 md:w-3/6 lg:w-2/6">
      
        <section className=" w-full">
          <h1 className=" font-bold text-white text-5xl mb-10 text-center">¡Bienvenido!</h1>
          <Formulario
            users={users}
            setIsValidLogin={setIsValidLogin}
            setUserActive={setUserActive}
          />
        </section>
    </div>
  )
}

export default Login;
