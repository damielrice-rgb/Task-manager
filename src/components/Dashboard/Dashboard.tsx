import type { Task } from '../../types/index';

interface DashboardProps {
  tasks: Task[];
}

export const Dashboard = ({ tasks }: DashboardProps) => {
  const totalTasks = tasks.length;
  const inProgressTasks = tasks.filter((task) => task.status === 'in-progress').length;
  const completedTasks = tasks.filter((task) => task.status === 'completed').length;
  const pendingTasks = tasks.filter((task) => task.status === 'pending').length;
  return (
    <div className="mb-6 rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Dashboard</h1>
      <p className="text-lg text-gray-900">Total Tasks: {totalTasks}</p>
      <div className="flex flex-col gap-4 sm:flex-row">
      <p className="text-lg text-gray-900">In Progress Tasks:</p> 
      <p className="text-lg font-bold text-blue-500">{inProgressTasks}</p>
      </div>
      <p className="text-lg text-gray-900">Completed Tasks:</p>
      <p className="text-lg font-bold text-green-500">{completedTasks}</p>
      <p className="text-lg text-gray-900">Pending Tasks:</p>
      <p className="text-lg font-bold text-yellow-500">{pendingTasks}</p>
      <p className="text-lg text-gray-900">In Progress Tasks: {inProgressTasks}</p>
      <p className="text-lg text-gray-900">Completed Tasks: 
        {completedTasks}</p>
      <p className="text-lg text-gray-900">Pending Tasks: {pendingTasks}</p>
    </div>
  );
}