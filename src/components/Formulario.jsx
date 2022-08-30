import { useState } from "react";

const Formulario = ({users, setIsValidLogin, setUserActive}) => {

    //* Hooks
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    //* Funciones
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Verificar que ambos campos esten llenos
        if([user, password].includes('')){
            console.log("Hay al menos un campo vacío")
            return;
        }

        //Buscar usuario en BD
        users.forEach( item => {
            if(item.user === user && item.password === password){
                setUserActive(user);
                setIsValidLogin(true);
                return;
            }
        });

        //Usuario no encontrado
        setError(true);
        
        setTimeout( function(){
            setError(false);
        }, 1500)
    }

    //* Template

    return (
        <form 
            onSubmit={handleSubmit}
            className=" backdrop-blur-sm bg-white/20 px-5 py-11 rounded-md text-white font-normal text-lg"
        >
            <div className=" mb-5">
                <label htmlFor="usuario" className=" block pb-2">
                    Nombre de usuario:
                </label>
                <input 
                    id="usuario"
                    type="text"
                    placeholder="Ingresar usuario"
                    value={user}
                    className=" w-full p-2 rounded-md text-gray-800"
                    onChange={(e) => setUser(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="contraseña" className=" block pb-2">
                    Contraseña:
                </label>
                <input 
                    id="contraseña"
                    type="password"
                    placeholder="Ingresar contraseña"
                    value={password}
                    className=" w-full p-2 rounded-md text-gray-800"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            {error && <p className=" mt-3 text text-red-700 italic font-medium">Usuario o contraseña incorrecta.</p>}

            <input 
                type="submit" 
                value={'Ingresar'} 
                className=" rounded-md bg-gray-800 transition ease duration-500 text-white font-semibold mx-auto block w-3/4 py-2 cursor-pointer hover:bg-gray-700 hover:text-white mt-10"
            />
        </form>
    )
}

export default Formulario;
