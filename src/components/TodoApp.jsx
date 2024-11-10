import { useState } from 'react'
import './TodoApp.css'

function TodoApp() {
    let [toDos, setToDos] = useState([])
    let [toDo, setToDo] =useState('')
    return (
        <>
            <div className="container">
                <div className="input-box">
                    <input value={toDo} type="text" placeholder='Add Task' onChange={handleChange} />
                    <i class="fa-solid fa-plus plus-icon"></i>
                </div>
                <div className="tasks">
                    <div className="task">
                        <input type="checkbox" />
                        <p>Read Book</p>
                        <i class="fa-solid fa-trash delete-icon"></i>
                    </div>
                    <div className="task">
                        <input type="checkbox" />
                        <p>Read Book</p>
                        <i class="fa-solid fa-trash delete-icon "></i>
                    </div>
                    <div className="task">
                        <input type="checkbox" />
                        <p>Read Book</p>
                        <i class="fa-solid fa-trash delete-icon"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoApp