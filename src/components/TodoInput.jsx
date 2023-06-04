
const TodoInput = () => {
  return (
    <form className="todo_input">
      <input 
        type="text" 
        placeholder="Today, I will ..."
        className="input_placeholder"
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