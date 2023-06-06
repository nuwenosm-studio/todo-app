import { useState } from 'react';

const TodoInput = ({ onInsertTask }) => {
  const [inputTask, setInputTask] = useState("");

  const handleSubmitTask = (e) => {
    e.preventDefault();
    if (inputTask.trim() !== '') {
      onInsertTask(inputTask);
    }
    setInputTask('');
  }

  return (
    <form className="todo_input" onSubmit={handleSubmitTask}>
      <input 
        type="text" 
        placeholder="Today, I will ..."
        value={inputTask}
        className="input_placeholder"
        onChange={(e) => setInputTask(e.target.value)}
      />

      <input 
        type="submit" 
        value="Add" 
        className="submit_button"
      />
    </form>
  )
}

export default TodoInput