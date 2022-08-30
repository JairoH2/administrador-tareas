import Dashboard from "./Dashboard";

const ListTasks = ({userActive}) => {

  //* Hooks

  //* Funciones

  //* Template
  return (
    <div className="container mx-auto w-10/12 sm:w-full">
        <header className=" mb-10">
          <h1 className="pt-5 text-4xl font-medium text-white text-center sm:text-left">¡Buenos días, <span className=" text-4xl">{userActive}</span>!</h1>
        </header>

        <Dashboard/>
        
    </div>
  )
}

export default ListTasks;
