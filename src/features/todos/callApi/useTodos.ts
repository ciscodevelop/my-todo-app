import axios from "axios";
import { useEffect, useState } from "react";
import { store } from "../../../app/store";
import { TodoModel } from "../model/todoModel";
import userCallAxios from "../../axiosIstance/userAxiosIstance";
export function useTodos() {
  const [todos, setTodos] = useState<TodoModel[]>([]);
  const accessToken = store.getState().user.accessToken;
  // FETCH TODOS
  useEffect(() => {
    async function getTodos() {
      const response = await userCallAxios.get("todos", {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });
      setTodos(response.data);
    }
    getTodos();
  }, [accessToken]);
  // DELETE TODO
  const deleteTodo = async (id: any) => {
    if (window.confirm("Vuoi elimare definitivamente")) {
      try {
        await userCallAxios.delete(`todos/${id}`, {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        });
      } catch (error) {
        console.log(error);
      }
      return setTodos(todos.filter((t: any) => t._id !== id));
    }
  };
  // UPDATE STATE TODO
  const stateTodo = async (id: any, isComplete: boolean) => {
    try {
      await userCallAxios
        .patch(
          `todos/${id}`,
          { isComplete: !isComplete },
          {
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          }
        )
        .then((response) => {
          setTodos(
            todos.map((t: any) => {
              if (t._id === id) {
                return { ...t, isComplete: !isComplete };
              }
              return t;
            })
          );
        });
    } catch (error) {
      console.log(error);
    }
  };
  // ADD TODO
  const addTodo = (inputTodo: string) => {
    try {
      userCallAxios
        .post(
          "todos",
          { text: inputTodo },
          {
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          setTodos([...todos, response.data]);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    addTodo,
    stateTodo,
    deleteTodo,
    todos,
  };
}
