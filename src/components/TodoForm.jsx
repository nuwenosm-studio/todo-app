import { useState } from 'react';
import TodoView from './TodoView';
import TodoEdit from './TodoEdit';

const TodoForm = () => {
    const [arrayTask, setArrayTask] = useState([]);
    const [editState, setEditState] = useState(true);

    return (
        <div className="todo_form">
            { editState ?   
                <TodoEdit 
                />  : 
                <TodoView
                    arrayTask={arrayTask}
                    setArrayTask={setArrayTask}
                /> 
            }
        </div>
    )
}

export default TodoForm