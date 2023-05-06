import React, { useState } from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';
import "./ToDoList.css"
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function ToDoList(props) {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [isInputFull, setIsInputFull] = useState("")
  const saveInputVal = (event) => {
    setInputValue(event.target.value)
  }

  const addTask = () => {
    setTasks([...tasks, inputValue])
    setInputValue("")
    if (isEditing !== false) {
      const editedTasks = [...tasks]
      editedTasks[isEditing] = inputValue
      setTasks(editedTasks)
      setInputValue("")
      setIsEditing(false)
    } else {
      setTasks([...tasks, inputValue])
      setInputValue("")
    }
    if (inputValue === "") {
      setIsInputFull("Please frist write a task!🔍😒")
    } else {
      setIsInputFull("")
    }

  }

  const deleteTask = (index) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  const edit = (index) => {
    setIsEditing((index))
    setInputValue(tasks[index])
  }

  return (
    <div className="container">
      <h1>ToDoList APP</h1>
      <div className="form">
        <input type="text" placeholder="Write a task" className="input" onChange={saveInputVal} value={inputValue} />
        <button onClick={addTask} className="add-btn"
        >Add Task</button>
        <p className="warning">{isInputFull}</p>
      </div>

      {tasks.map((task, index) => {
        if (task !== "") {
          return (
            <div className="out-puts">
              <p className="tasks">{task} </p>
              <FaEdit onClick={() => edit(index)} className="edit-btn" />
              <FaTrash onClick={() => deleteTask(index)} className="delete-btn" />
            </div>
          )
        }
      })}

    </div>

  )

}

export default ToDoList