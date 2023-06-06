import { useState } from 'react';
import TodoInput from "./TodoInput";
import TodoProgress from "./TodoProgress";
import TodoLists from "./TodoLists";

const TodoForm = () => {
    
    const [arrayTask, setArrayTask] = useState([]);

    return (
        <div className="todo_form">
            <TodoInput setArrayTask={setArrayTask} />

            <TodoProgress arrayTask={arrayTask} />

            <TodoLists
                arrayTask={arrayTask}
                setArrayTask={setArrayTask}
            />
        </div>
    )
}

export default TodoForm