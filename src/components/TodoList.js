import React, { useState } from "react";
import { useTodoContext } from "./TodoContext";
import "../css/TodoList.css"; // Assuming the CSS file is named TodoList.css

const TodoList = () => {
  const { state, dispatch } = useTodoContext();
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObj = {
        id: state.todos.length + 1, // You can use a proper ID generation method
        title: newTask,
        completed: false
      };
      dispatch({ type: "ADD_TASK", payload: newTaskObj });
      setNewTask("");
    }
  };

  const handleRemoveTask = (taskId) => {
    dispatch({ type: "REMOVE_TASK", payload: taskId });
  };

  return (
    <div className="todo-list-container">
      <h1 style={{ textAlign: "center" }}>Todo List</h1>
      <div className="add-task">
        <input
          className="task-input"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="add-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <table className="task-table">
        <thead>
          <tr>
            <th>Completed</th>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.todos.map((task) => (
            <tr key={task.id} className="task">
              <td>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={task.completed}
                  onChange={() =>
                    dispatch({ type: "TOGGLE_TASK", payload: task.id })
                  }
                />
              </td>
              <td>
                <span
                  className={task.completed ? "completed-task" : "uncompleted-task"}
                >
                  {task.title}
                </span>
              </td>
              <td>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveTask(task.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
