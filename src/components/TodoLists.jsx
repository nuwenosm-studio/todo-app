import { BsCheckLg, BsTrash3 } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";

const TodoLists = ({ arrayTask, setArrayTask }) => {

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

    return (
        <div className="todo_lists">
            {arrayTask.map((todo, index) => (
                <div    
                    key={index}
                    className={`todo_item ${todo.completed ? 'completed' : ''}`} 
                >
                    {/* Checked if task is completed */}
                    <div    
                        className="complete_button icon" 
                        onClick={() => handleCompletedTask(index)}
                    >
                        {todo.completed ? "" : <BsCheckLg />}
                    </div>
                    
                    <div className="todo_taskName">{todo.taskName}</div>
                    
                    {/* Delete task when clicking trash icon */}
                    <div 
                        className="delete_button icon" 
                        onClick={() => handleDeleteTask(index)}
                    >
                        <BsTrash3 />
                    </div>
                </div>
            ))}

            <div className="edit_button">
                Edit <TbEdit className="icon"/>
            </div>
      </div>
    )
}

export default TodoLists