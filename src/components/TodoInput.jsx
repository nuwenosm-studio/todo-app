import { useState } from 'react';

const TodoInput = ({ arrayTask, setArrayTask }) => {
  const [inputTask, setInputTask] = useState("");

  const handleSubmitTask = (e) => {
    e.preventDefault();
    if (inputTask.trim() !== '') {
      setArrayTask([inputTask, ...arrayTask]);
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
        value="submit" 
        className="submit_button"
      />
    </form>
  )
}

export default TodoInput