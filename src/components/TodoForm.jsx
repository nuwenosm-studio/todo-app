
import TodoInput from './TodoInput';
import TodoProgress from './TodoProgress';
import TodoLists from './TodoLists';

const TodoForm = () => {
    return (
        <div>
            <div className="todo_input"><TodoInput /></div>
            <div className="todo_progress"><TodoProgress /></div>
            <div className="todo_lists"><TodoLists /></div>
        </div>
    )
}

export default TodoForm