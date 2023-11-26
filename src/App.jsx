import './App.css';
import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';

export default function App() {

  const [tasks, setTasks] = useState(() => {
    // Obtiene las tareas desde localStorage al cargar la página
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  // Efecto para actualizar localStorage cuando cambian las tareas
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const taskInput = (valor) => {
    if (valor === "") return;
    setTasks([...tasks, {
      id: new Date().getTime(),
      title: valor,
      completed: false
    }]);
  };

  function toggleTaskStatus(id) {
    const newTasks = tasks.map((task) => {
      // Si es la tarea que cambio su estado
      if (task.id === id) {
        // Retorna la tarea modificada
        return {
          ...task,
          completed: !task.completed
        };
      }
      // Caso contrario, dejar la tarea sin modificar
      return task;
    });

    setTasks([
      ...newTasks
    ]);
  }

  function deleteTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks([
      ...newTasks
    ]);
  };


  return (
    <div className="App">
      <div className="titulo">
        <h1>TODO List</h1>
      </div>
      <main className="main">
        <TaskForm taskInput={ taskInput }
        />
        <TaskList
          tasks={ tasks }
          onTaskStatusChange={ toggleTaskStatus }
          onTaskDelete={ deleteTask }
        />
      </main>
    </div>
  );
}