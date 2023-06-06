import { BsTrash3, BsSave } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FiDelete } from "react-icons/fi";

const TodoEdit = ({ arrayTask, setArrayTask, editState, setEditState }) => {
    return (
        <div className="todo_edit">
            <div className="todo_deleteAll">
                Delete All
                <FiDelete className="icon" />
            </div>
        </div>
    )
}

export default TodoEdit