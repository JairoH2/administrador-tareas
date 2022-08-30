import { FaLongArrowAltRight } from "react-icons/fa";
const Task = () => {

    //* Hooks

    //* Funciones

    //* Template

    return (
        <article className=" bg-gray-50 sm:h-60 rounded-lg p-5 hover:bg-gray-800 hover:text-white group cursor-pointer ease-in duration-200 flex flex-col place-content-between">
            <header>
                <h2 className=" font-medium text-lg mb-2">Lavar el Auto</h2>
                <p>Por la mañana lavar el auto y después ponerlo a secar al sol.</p>
            </header>

            <FaLongArrowAltRight 
                className=" text-gray-700 text-2xl group-hover:text-white mt-5"
            />
        </article>
    )
}

export default Task;
