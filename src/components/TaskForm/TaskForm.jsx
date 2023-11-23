import { useState } from 'react'
import './TaskForm.css'

export default function TaskForm({ taskInput }) {

  const [newTask, setNewTask] = useState('')

  const handleOnChange = (e) => setNewTask(e.target.value)
  const handleOnClick = (e) => {
    e.preventDefault()
    taskInput(newTask)
    setNewTask('')
  }

  return (
    <form className="form">

      <input type="text" placeholder="What would you like to do?" onChange={handleOnChange} value={newTask} />
      <button onClick={handleOnClick}> Add </button>
    </form>
  )
}