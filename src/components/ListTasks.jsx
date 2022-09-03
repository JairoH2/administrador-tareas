import { useState } from "react";
import Dashboard from "./Dashboard";
import { FaPlus } from "react-icons/fa";

const ListTasks = ({userActive}) => {

  //* Hooks
  const [tasks, setTaks] = useState([
    {
      category: 'Salud',
      activity: 'Cita Médica con Edna',
      description: 'Revisar ligeros movimientos involuntarios en el ojo al ver la TV.'
    },
    {
      category: 'Hogar',
      activity: 'Bañar a Titán',
      description: 'Últimanete ha tenido muchas pulgas, es necesario bañar diario.'
    },
    {
      category: 'Trabajo',
      activity: 'Juntar Documentos',
      description: 'CURP y Acta de Nacimiento solicitados para ir a viajar.'
    },
    {
      category: 'Trabajo',
      activity: 'Juntar Documentos',
      description: 'CURP y Acta de Nacimiento solicitados para ir a viajar.'
    },
    {
      category: 'Trabajo',
      activity: 'Juntar Documentos',
      description: 'CURP y Acta de Nacimiento solicitados para ir a viajar.'
    }
  ]);
  //* Funciones

  //* Template
  return (
    <div className="container mx-auto w-10/12 sm:w-full">
        <header className=" mb-10">
          <h1 className="pt-5 text-4xl font-medium text-white text-center sm:text-left">¡Buenos días, <span className=" text-4xl">{userActive}</span>!</h1>
        </header>

        <Dashboard
          tasks={tasks}
        />

        <FaPlus className=" text-white bg-gray-900 w-12 h-12 p-3 rounded-full fixed bottom-10 right-10" />
        
    </div>
  )
}

export default ListTasks;
