import { useState } from 'react';
import { TaskList } from '../src/components/TaskList/TaskList';
import type { Task, TaskFormData } from '../src/types/index';
import { TaskFilter } from '../src/components/TaskFilter/TaskFilter'
import { TaskForm } from './components/TaskForm/TaskForm';
import { Dashboard } from './components/Dashboard/Dashboard';
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
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('none');

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

  const displayedTasks = [...tasks]
  .filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .sort((a, b) => {
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    }
    if (sortBy === 'dueDate') {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    }
    if (sortBy === 'priority') {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl">
        <TaskForm 
        onAddTask={handleAddTask}
        onUpdateTask={handleUpdateTask}
        editingTask={editingTask}
         />

         <Dashboard tasks={displayedTasks} />

         <input 
           type="text" 
           placeholder="Search tasks..." 
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
         />

         <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="none">Sort by</option>
          <option value="title">Title</option>
          <option value="dueDate">Due Date</option>
          <option value="priority">Priority</option>
        </select>


       <TaskFilter
    onFilterChange={handleFilterChange} />


    <TaskList 
    tasks={displayedTasks}
    onStatusChange={handleStatusChange}
    onDelete={handleDelete}
    onEdit={handleEdit}/>

   
    </div>
    </div>
  )
}

export default App
