import Task from '../Task/Task';
import './TaskList.css';

export default function TaskList({ tasks, onTaskStatusChange, onTaskDelete }) {
  return (
    <>
      <div className='task-list'>
        <h3 className='task-list__title'>Todo List</h3>
        <table className='task-list__table'>
          <thead className='task-list__thead'>
            <tr className='task-list__tr'>
              <th className='task-list__th'>List</th>
              <th className='task-list__th'>Status</th>
              <th className='task-list__th'>Close</th>
            </tr>
          </thead>
          <tbody className='task-list__tbody'>
            {tasks.map((task) => (
              <Task
                key={task.id}
                title={task.title}
                status={task.completed}
                onStatusChange={() => onTaskStatusChange(task.id)}
                onDelete={() => onTaskDelete(task.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}