import type { TaskItemProps } from '../../types/index';

export const TaskItem = ({
  task,
  onStatusChange,
  onDelete
}: TaskItemProps ) => {
  return (
    <div className="mb-4 rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
      <h2 className={`mb-2 text-xl font-bold ${task.status === 'completed'
        ? 'text-gray-400 line-through'
        : 'text-gray-800'
      }`}>{task.title}</h2>

      <p className={`mb-4 ${
        task.status === 'completed'
        ? 'text-gray-400 line-through'
        : 'text-gray-600'
      }`}>{task.description}</p>
      <p className="text-sm text-gray-700">

        <span className="mr-2 font-semibold">Status: </span>
        
        <span className={`rounded-full bg-blue-100 px-3 py-1 text-sm font-medium ${task.status === 'completed'
          ? 'bg-green-100 text-green-800'
          : task.status === 'in-progress'
          ? 'bg-blue-100 text-blue-800'
          : 'bg-gray-100 text-gray-800'
        }`}>{task.status}</span></p>

      <p className="text-sm text-gray-700">
        <span className="mr-2 font-semibold">Priority:</span> 
      <span className={`rounded-full bg-blue-100 px-3 py-1 text-sm font-medium ${task.priority === 'high' 
      ? 'bg-red-100 text-red-800'
      : task.priority === 'medium'
      ? 'bg-yellow-100 text-yellow-800'
      : 'bg-green-100 text-green-800'}`}>{task.priority}</span></p>
      <p className="text-sm text-gray-700">Due: {task.dueDate}</p>
      <div className="mt-4 flex gap-3">
      <button className="text-blue-500" onClick={() => onStatusChange(task.id, 'pending')}>
        Pending
      </button>
      <button onClick={() => onStatusChange(task.id, 'in-progress')}>
        In Progress
      </button>
      <button onClick={() => onStatusChange(task.id, 'completed')}
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
        Completed
      </button>
      <button onClick={() => onDelete(task.id)}
        className="rounded-md bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700">
        Delete
      </button>
      </div>
    </div>
  );
};