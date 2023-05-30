import './App.css';
import TodoList from './TodoList';

function App() {

  const title = 'Todo List';
  const color_arr = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
      </div>
      <div className="todoList">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
