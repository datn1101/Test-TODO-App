import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
