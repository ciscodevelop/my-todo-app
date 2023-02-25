import { useEffect, useState } from "react";
import { AddBox, DeleteForeverOutlined } from "@mui/icons-material";
import { format, render, cancel, register } from "timeago.js";
import "./todos.scss";
import { useTodos } from "../../features/todos/callApi/useTodos";
import { TodoModel } from "../../features/todos/model/todoModel";
import Todo from "../../components/todo/Todo";

const Todos = () => {
  const [textTodo, setTextTodo] = useState("");
  const { todos, deleteTodo, stateTodo, addTodo } = useTodos();
  function handleAddTodo(e: any) {
    e.preventDefault();
    addTodo(textTodo);
    setTextTodo("");
  }
  const handleState = (id: string, isComplete: any) => {
    stateTodo(id, isComplete);
  };
  const handleDelete = (id: string) => {
    deleteTodo(id);
  };
  return (
    <div className="todos">
      <div className="container">
        <h1>I Tuoi Todos</h1>
        <div className="top">
          <input
            type="text"
            value={textTodo}
            onChange={(e) => setTextTodo(e.target.value)}
            placeholder="Scrivi il Tuo Todo"
          />
          {textTodo && <AddBox className="icon-add" onClick={handleAddTodo} />}
        </div>
        <div className="bottom">
          {todos &&
            todos?.map((todo: TodoModel) => (
              <Todo
                todoProps={todo}
                handleDelete={handleDelete}
                handleState={handleState}
                key={todo._id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Todos;
