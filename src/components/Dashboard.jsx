import Task from "./Task";

const Dashboard = ({tasks}) => {
    
    //* Hooks

    //* Funciones

    //* Template
    return (
        <section className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {
                tasks.map((item, index) =>(
                    <Task
                        item={item}
                        key={index}
                    />
                ))
            }
        </section>
    )
}

export default Dashboard;
