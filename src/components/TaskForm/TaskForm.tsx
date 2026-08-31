import type { TaskFormData } from '../../types/';
import { useState } from 'react';

export const TaskForm = () => {
  const [title, setTitle] = useState('');
  return (
    <div>
      <h2>Add New Task</h2>

      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value) }/>
    </div>
  );
};