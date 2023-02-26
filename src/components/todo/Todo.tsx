import { format } from "timeago.js";
import "./todo.scss";
import { DeleteForeverOutlined } from "@mui/icons-material";
const Todo = ({ todoProps, handleState, handleDelete }: any) => {  
  return (
    <div className="todo">
      <div className="todo-container">
        <input
          style={todoProps.isComplete ? { accentColor: "green" } : {}}
          type="checkbox"
          value={todoProps.isComplete?.toString()}
          checked={todoProps.isComplete}
          onChange={() => handleState(todoProps._id!, todoProps.isComplete)}
        />
        <h2
          style={todoProps.isComplete ? { textDecoration: "line-through" } : {}}
        >
          {todoProps.text}
        </h2>
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