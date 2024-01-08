import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Todolist.css";

const Todolist = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  // загрузка тасков при обновлении страницы

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      dispatch({ type: "LOAD_TODOS", payload: storedTodos });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // функции добавления и удаления тасков

  const changeTask = (event) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    dispatch({ type: "ADD_TASK", payload: task });
    setTask("");
  };

  const removeTodo = (index) => {
    dispatch({ type: "REMOVE_TASK", payload: index });
  };

  return (
    <div className="todolist">
      <div className="container">
        <div className="todolist_title">
          <h1>Todo List</h1>
        </div>
        <div className="todos__info">
          <div className="todolist_logic">
            <input
              className="todo-input"
              type="text"
              placeholder="task name"
              value={task}
              onChange={(event) => changeTask(event)}
            />
            <button onClick={addTask} className="addBtn">Add Task</button>
          </div>
          <div className="todos">
            <ul>
              {todos.map((todo, index) => (
                <div key={index} className="task">
                  {todo.task}
                  <button onClick={() => removeTodo(index)}>Remove Task</button>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
