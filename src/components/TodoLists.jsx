import { BsCheckLg } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";

const TodoLists = ({ arrayTask }) => {
  return (
    <div className="todo_lists">
      {arrayTask.map((task, index) => (
        <div className="todo_item" key={index}>
          <div className="todo_task">{task}</div>
          <div className="finish_button">
            <BsCheckLg fontSize="20px"/>
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