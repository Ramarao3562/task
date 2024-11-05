// src/TaskForm.js
import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
        style={{ padding: '8px', width: '70%' }}
      />
      <button type="submit" style={{ padding: '8px 16px', marginLeft: '10px' }}>Add</button>
    </form>
  );
}

export default TaskForm;
