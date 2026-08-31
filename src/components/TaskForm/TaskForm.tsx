import type { TaskFormData } from '../../types/';
import { useState } from 'react';

export const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  return (
    <div>
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
    </div>
  );
};