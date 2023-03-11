import Header from "./Header";
import { useState } from "react";
import { Task } from "./Task"; 

export const TaskList = (props) => {
    const {list} = props;

    const [tasks, setTasks] = useState(list)

    const eventHandler = (taskName) => {
        console.log(`Cambiando estado tarea: ${taskName}`)
    }

    const agregarTarea = (task) => {
        console.log('Se estan agregando');
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    const eliminarTarea = (task) => {
        console.log('Se esta agregando');
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }


    return (
        <div>
            <Header></Header>
            <form>
                <input
                 type="text"
                 placeholder="Add your new Todo">
                    
                 </input>
                <button onClick={agregarTarea}></button>
                <button onClick={eliminarTarea}></button>
                {/* {list.map((task)=>{
                    <Task name={task.name}></Task>
                })} */}
            </form>
        </div>
    )
}