

import type { TaskStatus, TaskFormProps } from '../../types/index';
import { useState } from 'react';

export const TaskForm = ({onAddTask}: TaskFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<TaskStatus>('pending');
  const [priority, setPriority ] = useState<'low' | 'medium' | 'high'>('medium');
  const [dueDate, setDueDate ] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddTask({title, description, status, priority, dueDate});

    setTitle('');
    setDescription('');
    setStatus('pending');
    setPriority('medium');
    setDueDate('');

  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Task</h2>

      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value) }/>

        <label htmlFor="description">
          Description</label>

          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}></textarea>

            <label htmlFor="status">Status</label>

            <select
              id="status"
              value={status}
              onChange={(event) => setStatus(event.target.value as TaskStatus)}>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>

            <label htmlFor="priority">Priority</label>

            <select
              id="priority"
              value={priority}
              onChange={(event) => setPriority(event.target.value as 'low' | 'medium' | 'high')}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>

            <label htmlFor="dueDate">Due Date</label>

            <input
            id="dueDate"
            type="date"
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}/>

            <button type='submit'>Add Task</button>
    </form>
  );
};