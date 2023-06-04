
import TodoInput from './TodoInput';
import TodoProgress from './TodoProgress';
import TodoLists from './TodoLists';

const TodoForm = () => {
    return (
        <div className="todo_form">
            <TodoInput />
            <TodoProgress />
            <TodoLists />
        </div>
    )
}

export default TodoForm