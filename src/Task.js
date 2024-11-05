// src/Task.js
import React from 'react';

function Task({ task, toggleComplete, deleteTask }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid #ddd',
      }}
    >
      <span
        onClick={() => toggleComplete(task.id)}
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          cursor: 'pointer',
          flex: 1,
        }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)} style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </div>
  );
}

export default Task;
