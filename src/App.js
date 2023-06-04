import './styles.css';
import TodoForm from './components/TodoForm';

function App() {

  return (
  <div className="project_todoList">
    <div className="project_title">Todo List</div>
    <div className="project_container"><TodoForm /></div>
  </div>
  );
}

export default App;
