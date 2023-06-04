
const TodoInput = () => {
  return (
    <form className="input_container">
      <input 
        type="text" 
        value="Today, I will ..."
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