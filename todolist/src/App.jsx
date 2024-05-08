import { useState } from 'react';
import './App.css';

function TaskList({ tasks, setTasks }) {
  const listItems = tasks.map((task) => <li key={task.id}>{task.name}</li>);
  return <ul>{listItems}</ul>;
}

function AddComp({ tasks, setTasks }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0;
    setTasks([...tasks, { id, name }]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your task:
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type='submit' value='Add' />
      </form>
    </div>
  );
}

function App() {
  const [tasks, setTasks] = useState([
    { id: 0, name: 'task A' },
    { id: 1, name: 'task B' },
  ]);

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskList tasks={tasks} setTasks={setTasks} />
      <AddComp tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
