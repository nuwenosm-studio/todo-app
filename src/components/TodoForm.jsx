import { useState, useEffect } from 'react';

import TodoInput from "./TodoInput";
import TodoProgress from "./TodoProgress";
import TodoLists from "./TodoLists";

const TodoForm = () => {
    
    const [arrayTask, setArrayTask] = useState([]);

    useEffect(() => {
        if (arrayTask.length === 0) return;
        localStorage.setItem('arrayTask', JSON.stringify(arrayTask));
    }, [arrayTask]);
    
    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem('arrayTask'));
        setArrayTask(tasks || []);
    }, []);

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