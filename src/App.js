// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedTasks, setSelectedTasks] = useState([]);

  const tasks = [
    { id: 1, description: 'Diseñar interfaz para el registro y autenticación' },
    { id: 2, description: 'Desarrollar lógica para el registro y autenticación' },
    // ... agregar más tareas según sea necesario
  ];

  const handleTaskSelection = (taskId) => {
    const isSelected = selectedTasks.includes(taskId);
    if (isSelected) {
      setSelectedTasks(selectedTasks.filter((id) => id !== taskId));
    } else {
      setSelectedTasks([...selectedTasks, taskId]);
    }
  };

  const renderTasks = () => {
    return tasks.map((task) => (
      <div
        key={task.id}
        onClick={() => handleTaskSelection(task.id)}
        className={`task ${selectedTasks.includes(task.id) ? 'selected' : ''}`}
      >
        {task.description}
      </div>
    ));
  };

  return (
    <div className="App">
      <h1>Sprint Planning</h1>
      <div className="task-list">
        {renderTasks()}
      </div>
      <div className="selected-tasks">
        <h2>Selected Tasks</h2>
        <ul>
          {selectedTasks.map((taskId) => (
            <li key={taskId}>{tasks.find((task) => task.id === taskId).description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
