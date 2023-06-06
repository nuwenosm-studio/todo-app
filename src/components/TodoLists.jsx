import { BsCheckLg, BsTrash3 } from "react-icons/bs";

const TodoLists = ({ arrayTask, setArrayTask }) => {

    const handleCompletedTask = (index) => {
        const updatedTodo = arrayTask.map((task, i) => {
            if (i === index) {
                return { ...task, completed: !task.completed, editable: false };
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

    const toggleEditTask = (index) => {
        const updatedTodo = arrayTask.map((task, i) => {
            if (i === index) {
                return { ...task, editable: !task.editable };
            }
            return task;
        });
        setArrayTask(updatedTodo);
    };

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

                    {(!todo.editable || todo.completed) && (
                        <div 
                            className="todo_taskName" 
                            onClick={() => toggleEditTask(index)}
                        >
                            {todo.taskName}
                        </div>
                    )}

                    {(todo.editable && !todo.completed) && (
                        <form 
                            onSubmit={() => toggleEditTask(index)}
                            className="todo_taskNameEdit" 
                        >
                            <input 
                                type="text" 
                                value={todo.taskName}
                                onChange={e => handleUpdateTask(e.target.value, index)}
                            />
                        </form>
                    )}
                    
                    <div 
                        className="delete_button icon" 
                        onClick={() => handleDeleteTask(index)}
                    >
                        <BsTrash3 />
                    </div>
                </div>
            ))}
            {console.log(arrayTask)}
        </div>
    )
}

export default TodoLists;
