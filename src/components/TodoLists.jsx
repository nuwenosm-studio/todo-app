import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
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

  return (
    <div className="todo_lists">
      {arrayTask.map((todo, index) => (
        <div 
        className={`todo_item ${todo.completed ? 'completed' : ''}`}
          key={index}
        >
          <div className="todo_task">{todo.task}</div>
          <div 
            className="finish_button" 
            onClick={() => handleCompletedTask(index)}
          >
            {todo.completed ? <AiOutlineClose fontSize="20px"/> : <BsCheckLg fontSize="20px"/>}
            
          </div>
        </div>
      ))}
      <div className="edit_button">
        Edit <TbEdit fontSize="20px"/>
      </div>
    </div>
  )
}

export default TodoLists