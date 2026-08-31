import type { TaskFilterProps } from '../../types/index';

export const TaskFilter = ({onFilterChange}: TaskFilterProps) => {
  const handleStatusChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const status = event.target.value;

    if(status === 'all'){
      onFilterChange({
        status: null
      });
    } else {
      onFilterChange({
        status: status as 'pending' | 'in-progress' | 'completed'});
  }
};

const handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const priority = event.target.value;

  if (priority === 'all'){
    onFilterChange({
      priority: null
    });
  } else {
    onFilterChange({
      priority: priority as 'low' | 'medium' | 'high'
    });
  }
}

return (
  <div className="mb-6 rounded-lg-white p-6 shadow-md">
    <p className="mb-4 text-lg font-bold text-center">Task Manager App</p>

    <h2 className="mb-4 text-lg font-semibold text-gray-800">Filter Task</h2>
    <div className="flex flex-col gap-4 sm:flex-row">
    <div className="flex flex-col">
    <label htmlFor="status-filter"
      className="mb-1 text-sm font-medium text-gray-700">
      Filter by status:
      </label>

    <select id="status-filter" 
    onChange={handleStatusChange}
    className="rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-700 outline-none focus:border-blue-500 focus-ring focus:ring-2 focus:ring-blue-200">
      <option value="all">All Tasks</option>
      <option value="pending">Pending</option>
      <option value="in-progress">In Progress</option>
      <option value="completed">Completed</option>
    </select>
    </div>
    
    <div className="flex flex-col">

    <label htmlFor="priority-filter"
      className="mb-1 text-sm font-medium text-gray-700">
      Filter by priority:</label>

    <select 
    id="priority-filter" 
    onChange={handlePriorityChange}
    className="rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-700 outline-none focus:border-blue-500 focus-ring focus:ring-2 focus:ring-blue-200">
      <option value="all">All Priorities</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
    </div>
    </div>
    </div>

  
);
}