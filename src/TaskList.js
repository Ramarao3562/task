// src/TaskList.js
import React from 'react';
import Task from './Task';

function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks to display.</p>
      ) : (
        tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
