import './App.css';
import Addtodo from './components/Addtodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>My todo list</h1>
    <Addtodo/>
    <TodoList/>
    </div>
  );
}

export default App;
