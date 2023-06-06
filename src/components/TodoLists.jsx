import { useState } from 'react';
import { BsCheckLg, BsTrash3 } from "react-icons/bs";

const TodoLists = ({ arrayTask, setArrayTask }) => {
    const [editables, setEditables] = useState(Array(arrayTask.length).fill(false));

    const handleCompletedTask = (index) => {
        const updatedTodo = arrayTask.map((task, i) => {
            if (i === index) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setArrayTask(updatedTodo);
    };

    const handleDeleteTask = (indexToRemove) => {
        setArrayTask(prev => {
            return prev.filter((taskObj, index) => index !== indexToRemove);
        })
    }

    const handleUpdateTask = (newTask, index) => {
        const updatedTodo = arrayTask.map((task, i) => {
            if (i === index) {
                return { ...task, taskName: newTask };
            }
            return task;
        });
        setArrayTask(updatedTodo);
    }

    const toggleEditable = (index) => {
        if (!arrayTask[index].completed) {
            const updatedEditables = [...editables];
            updatedEditables[index] = !updatedEditables[index];
            setEditables(updatedEditables);
        }
    }

    return (
        <div className="todo_lists">
            {arrayTask.map((todo, index) => (
                <div    
                    key={index}
                    className={`todo_item ${todo.completed ? 'completed' : ''}`} 
                >
                    <div    
                        className="complete_button icon" 
                        onClick={() => handleCompletedTask(index)}
                    >
                        {todo.completed ? "" : <BsCheckLg />}
                    </div>
                    
                    {!editables[index] ? 
                        <div 
                            className="todo_taskName" 
                            onClick={() => toggleEditable(index)}
                        >
                            {todo.taskName}
                        </div> :

                        <form 
                            onSubmit={e => {e.preventDefault(); toggleEditable(index)}}
                            className="todo_taskNameEdit" 
                        >
                            <input 
                                type="text" 
                                value={todo.taskName}
                                onChange={e => handleUpdateTask(e.target.value, index)}
                            />
                        </form>
                    }
                    
                    <div 
                        className="delete_button icon" 
                        onClick={() => handleDeleteTask(index)}
                    >
                        <BsTrash3 />
                    </div>
                </div>
            ))}
      </div>
    )
}

export default TodoLists;
