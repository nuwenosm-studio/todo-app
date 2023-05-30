import { useState } from 'react';

const TodoList = () => {
    const [todoInput, setTodoInput] = useState({task: '',completed: false});
    const [todoArr, setTodoArr ] = useState([]);

    const handleSubmitTo = (e) => {
        e.preventDefault();
        if (todoInput.trim !== '') {
            setTodoArr([...todoArr, {task:todoInput, completed: false}]);
        }
        setTodoInput('');
    }

    return (
        <div className="todo_container">
            <form className="todo_input" onSubmit={handleSubmitTo}>
                <input 
                    type="text" 
                    id="todoItem"
                    placeholder="add todo"
                    onChange={(e) => setTodoInput(e.target.value)}
                />
                {/* Submit button */}
                <input 
                    type="submit" 
                    value="submit"
                />
            </form>

            <div className="todo_show">
                {todoArr.map((item, index) => (
                    <div className="todo_item" key={index}>
                        {item.task}
                    </div>
                ))}
            </div>
            {console.log(todoArr)}
        </div>
    )
}

export default TodoList