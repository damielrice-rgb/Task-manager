

import type { TaskListProps } from '../../types/index';
import { TaskItem } from '../TaskItem/TaskItem';

export const TaskList = ({
  tasks,
  onStatusChange,
  onDelete,
  onEdit,
  }: TaskListProps) => {
  return (
    <div className="space-y-4">
      
      {tasks.map((task) => (
        <TaskItem
        key={task.id}
        task={task}
        onStatusChange={onStatusChange}
        onDelete={onDelete}
        onEdit={onEdit}
        />
      ))}
  
    </div>
  );

  

}

