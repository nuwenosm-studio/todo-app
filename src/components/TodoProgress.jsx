
const TodoProgress = ({ arrayTask }) => {
    let count = 0;
    const totalTasks = arrayTask.length;

    arrayTask.forEach((task) => {
        if (task.completed) count++;
    });
    const percentage = totalTasks === 0 ? 0 : Math.round((count / totalTasks) * 100);
    
    return (
        <div className="todo_progress">
            <div className="todo_percentage">{percentage}%</div>
            completed
        </div>
    )
}

export default TodoProgress