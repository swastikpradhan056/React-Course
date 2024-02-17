import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTasks] = useState("");

  function handleInputChange(e) {
    setNewTasks(e.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTasks("");
    }
  }
  function deleteTaks(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTasks([...updatedTask]);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTasks([...updatedTask]);
    }
  }
  return (
    <>
      <div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter a Task..."
            value={newTask}
            id=""
            onChange={handleInputChange}
          />
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-button"
                onClick={() => deleteTaks(index)}
              >
                Delete
              </button>
              <button
                className="moveUp-button"
                onClick={() => moveTaskUp(index)}
              >
                👆
              </button>
              <button
                className="moveUp-button"
                onClick={() => moveTaskDown(index)}
              >
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default ToDoList;
