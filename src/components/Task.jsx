import { FaLongArrowAltRight } from "react-icons/fa";
import bgeometria from '../assets/bgeometria.png';

const Task = ({item}) => {

    //* Hooks

    //* Funciones

    //* Template

    return (
        <article className=" backdrop-blur-sm bg-white/70 sm:h-60 rounded-lg p-5 hover:bg-black/30 hover:text-white group cursor-pointer ease-in duration-200 flex flex-col place-content-between relative overflow-hidden">
            <div className="flex flex-col place-content-between h-full z-10">
                <header>
                    <h2 className=" font-medium text-lg mb-2">{item.activity}</h2>
                    <p>{item.description}</p>
                </header>

                <FaLongArrowAltRight 
                    className=" text-gray-700 text-2xl group-hover:text-white mt-5"
                />
            </div>

            <img src={bgeometria} alt="" className=" absolute right-0 mt-0 h-5/6" /> 
        </article>
    )
}

export default Task;
