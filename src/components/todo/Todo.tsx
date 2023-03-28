import { format } from "timeago.js";
import "./todo.scss";
import { DeleteForeverOutlined } from "@mui/icons-material";
import { useState } from "react";
const Todo = ({ todoProps, handleState, handleDelete }: any) => {
  const [inputUpdate, setInputUpdate] = useState("");
  function handleUpdateText(e: any) {
    if (todoProps.text !== inputUpdate) {
      handleState(
        todoProps._id!,
        !todoProps.isComplete,
        inputUpdate ? inputUpdate : todoProps.text
      );
    }
  }
  function handleOnfocus(e: any) {
    setInputUpdate(e.target.value);
  }
  return (
    <div className="todo">
      <div className="todo-container">
        <input className="input-checkbox"
          style={todoProps.isComplete ? { accentColor: "green" } : {}}
          type="checkbox"
          value={todoProps.isComplete?.toString()}
          checked={todoProps.isComplete}
          onChange={() =>
            handleState(
              todoProps._id,
              todoProps.isComplete,
              inputUpdate ? inputUpdate : todoProps.text
            )
          }
        />
        <textarea
          value={inputUpdate ? inputUpdate : todoProps.text}
          className="input-text"
          onChange={(e) => setInputUpdate(e.target.value)}
          placeholder={todoProps.text}
          onBlur={handleUpdateText}
          onFocus={handleOnfocus} // style={todoProps.isComplete ? { textDecoration: "line-through" } : {}}
        ></textarea>

        <h5>{todoProps.title}Spesa</h5>
        <h6>{format(todoProps.createdAt!)}</h6>
        <DeleteForeverOutlined
          className="icon-del"
          onClick={() => handleDelete(todoProps?._id!)}
          style={{ cursor: "pointer", marginLeft: 10 }}
        />
      </div>
    </div>
  );
};
export default Todo;
