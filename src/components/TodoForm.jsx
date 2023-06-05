import { useState } from 'react';

import TodoInput from './TodoInput';
import TodoProgress from './TodoProgress';
import TodoLists from './TodoLists';

const TodoForm = () => {
    const [arrayTask, setArrayTask] = useState([]);

    return (
        <div className="todo_form">
            <TodoInput 
                arrayTask={arrayTask} 
                setArrayTask={setArrayTask}
            />
            <TodoProgress />
            <TodoLists 
                arrayTask={arrayTask}
                setArrayTask={setArrayTask}
            />
        </div>
    )
}

export default TodoForm