import { BsCheckLg } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";

const TodoLists = () => {
  return (
    <div className="todo_lists">
      <div className="todo_item">
        <div className="todo_task">I watch movie</div>
        <div className="finish_button">
          <BsCheckLg fontSize="20px"/>
        </div>
      </div>
      <div className="todo_item">
        <div className="todo_task">I watch movie</div>
        <div className="finish_button">
          <BsCheckLg fontSize="20px"/>
        </div>
      </div>
      <div className="todo_item">
        <div className="todo_task">I watch movie</div>
        <div className="finish_button">
          <BsCheckLg fontSize="20px"/>
        </div>
      </div>

      <div className="edit_button">
        Edit <TbEdit fontSize="20px"/>
      </div>
    </div>
  )
}

export default TodoLists