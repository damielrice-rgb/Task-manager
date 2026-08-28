import { useState } from 'react';
import { TaskList } from '../src/components/TaskList/TaskList';
import type { Task } from '../src/types/index';
import { TaskFilter } from '../src/components/TaskFilter/TaskFilter'
import './App.css'

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Learn React',
    description: 'Practice rendering lists',
    status: 'pending',
    priority: 'high',
    dueDate: '2026-08-30'
  },
  {
    id: '2',
    title: 'Practice TypeScript',
    description: 'Practice interfaces and types',
    status: 'in-progress',
    priority: 'medium',
    dueDate: '2026-08-31'
  },
  {
    id: '3',
    title: 'Build Task Manager',
    description: 'Finish the Per Scholas lab',
    status: 'completed',
    priority: 'low',
    dueDate: '2026-09-01'
  }
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const [filters, setFilters ] = useState<{
    status?: Task['status'];
    priority?: Task['priority'];
  }>({});

  const handleStatusChange = (
    taskId: string,
    newStatus: Task['status']
  ) => {
    setTasks((currentTasks) => 
    currentTasks.map((task) => 
    task.id === taskId 
    ? {...task, status: newStatus }
    : task 
  )
  )
  };

  const handleDelete = (taskId: string) => { 
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
);
};

const handleFilterChange = (newFilters: {
  status?: Task['status'] | null;
  priority?: Task['priority'] | null;
}) => {

  const updatedFilters = {
   ...filters,
   ...newFilters
  };
  setFilters(updatedFilters);

  let filteredTasks = initialTasks;

  if(updatedFilters.status){
    filteredTasks = filteredTasks.filter((task) => task.status === updatedFilters.status);
  }

  if(updatedFilters.priority){
    filteredTasks = filteredTasks.filter((task) => task.priority === updatedFilters.priority);
  }

  setTasks(filteredTasks);
  
  console.log('Filter changed:', filters);
  
}

  

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl">
       <TaskFilter
    onFilterChange={handleFilterChange} />


    <TaskList 
    tasks={tasks}
    onStatusChange={handleStatusChange}
    onDelete={handleDelete}/>

   
    </div>
    </div>
  )
}

export default App
