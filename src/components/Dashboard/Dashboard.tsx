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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg">Total Tasks: {totalTasks}</p>
      <p className="text-lg">In Progress Tasks: {inProgressTasks}</p>
      <p className="text-lg">Completed Tasks: {completedTasks}</p>
      <p className="text-lg">Pending Tasks: {pendingTasks}</p>
    </div>
  );
}