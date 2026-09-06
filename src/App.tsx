import { useState } from 'react';
import { TaskList } from '../src/components/TaskList/TaskList';
import type { Task, TaskFormData } from '../src/types/index';
import { TaskFilter } from '../src/components/TaskFilter/TaskFilter'
import { TaskForm } from './components/TaskForm/TaskForm';
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

  const [editingTask, setEditingTask] = useState<Task | null>(null);

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

const handleAddTask = (taskData: TaskFormData) => {
  const newTask: Task = {
    id: Date.now().toString(),
    ...taskData
  };

  setTasks((currentTask) => [
    ...currentTask,
    newTask
  ])
};

const handleUpdateTask = (updatedTask: Task) => {
  setTasks((currentTasks) =>
    currentTasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    )
  );
  setEditingTask(null);
}

const handleEdit = (task: Task) => {
  console.log('Editing task:', task);
  setEditingTask(task);
  
}

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
        <TaskForm 
        onAddTask={handleAddTask}
        onUpdateTask={handleUpdateTask}
        editingTask={editingTask}
         />


       <TaskFilter
    onFilterChange={handleFilterChange} />


    <TaskList 
    tasks={tasks}
    onStatusChange={handleStatusChange}
    onDelete={handleDelete}
    onEdit={handleEdit}/>

   
    </div>
    </div>
  )
}

export default App
