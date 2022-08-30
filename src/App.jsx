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
    {
      user: 'Josué',
      password: 'contraseña'
    }
  ]);
  const [isValidLogin, setIsValidLogin] = useState(false);
  const [modal, setModal] = useState(false);
  const [userActive, setUserActive] = useState('');

  //* Funciones

  //* Template
  return (
    <div className="bg-gradient-to-r from-personal-purple to-personal-pink h-screen">
      {isValidLogin ? (
          <ListTasks
            userActive={userActive}
          />) : (
          <Login 
            users={users}
            setIsValidLogin={setIsValidLogin}
            setUserActive={setUserActive}
          />  
        )
      }
    </div>
  )
}

export default App;
