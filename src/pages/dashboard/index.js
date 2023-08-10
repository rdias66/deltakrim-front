import React from 'react';
import { useForm } from 'react-hook-form';

const TodoDashboard = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [tasks, setTasks] = React.useState([]);

  const onSubmit = (data) => {
    const taskToAdd = {
      ...data,
      enteringDate: new Date().toISOString()
    };

    setTasks([...tasks, taskToAdd]);
    reset();
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="center-box">
      <h1>Todo List Dashboard</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Title"
          {...register('title', { required: true })}
        />
        {errors.title && <p>Title is required</p>}
        <input
          type="text"
          placeholder="Description"
          className="input-description"
          {...register('Description', { required: true })}
        />
        {errors.description && <p>Description is required</p>}
        <input
          type="text"
          placeholder="Due Date"
          {...register('dueDate', { required: true })}
        />
        {errors.dueDate && <p>Due date is required</p>}
          
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due: {task.dueDate}</p>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoDashboard;
