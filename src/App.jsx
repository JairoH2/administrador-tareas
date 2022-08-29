import { useState } from "react";
import ListTasks from "./components/ListTasks";
import Login from "./components/Login";

function App() {

  //* Hooks
  const [tasks, setTaks] = useState([]);
  const [users, setUsers] = useState([
    {
      user: 'Jairo',
      password: 'password'
    },
  ]);
  const [isValidLogin, setIsValidLogin] = useState(false);
  const [modal, setModal] = useState(false);

  //* Funciones

  //* Template
  return (
    <div className="bg-gradient-to-r from-personal-purple to-personal-pink h-screen">
      {isValidLogin ? (
          <ListTasks/>) : (
          <Login 
            users={users}
            setIsValidLogin={setIsValidLogin}
          />  
        )
      }
    </div>
  )
}

export default App;
