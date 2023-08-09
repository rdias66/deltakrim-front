import React, { useState } from 'react';

const TodoDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    enteringDate: '',
    dueDate: '',
    state: ''
  });

  const addTask = () => {
    if (newTask.title.trim() !== '') {
      const now = new Date();
      const nowFormatted = now.toISOString();
      const taskToAdd = { 
        ...newTask, 
        enteringDate :nowFormatted
      };
      
      setTasks([...tasks, taskToAdd]);
      setNewTask({
        title: '',
        description: '',
        enteringDate: '',
        dueDate: '',
        state: ''
      });
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List Dashboard</h1>
      <form>
        {/* Input fields for task details */}
        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
         <input
          type="text"
          placeholder="Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
          <input
          type="text"
          placeholder="Due date"
          value={newTask.dueDate}
          onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
        />
     
        <button type="button" onClick={addTask}>Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due: {task.dueDate}</p>
            {/* Display more attributes */}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoDashboard;
