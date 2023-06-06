import TodoInput from "./TodoInput";
import TodoProgress from "./TodoProgress";
import TodoLists from "./TodoLists";

const TodoView = ({ arrayTask, setArrayTask }) => {
    /*
        Todo Input
        - Insert new task into todo list
        - param (new task)
     */
    const addTask = ( newTask ) => {
        setArrayTask(prev => {
            return [...prev, { taskName: newTask, completed: false }];
        })
    }
    
    return (
        <div className="todo_view">
            <TodoInput onInsertTask={addTask} />

            <TodoProgress arrayTask={arrayTask} />

            <TodoLists
                arrayTask={arrayTask}
                setArrayTask={setArrayTask}
            />
        </div>
    )
}

export default TodoView