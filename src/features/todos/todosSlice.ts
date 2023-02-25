import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import { FetchTodos } from "./todosAPI";

interface userState {
    todos: any;
     
}
const initialState: any = {
    todos: [],
     
};
const  getTodosUser = createAsyncThunk('todos/fetchTodos', async ( ) => {

  const response = await FetchTodos()
  
  return  response
 })

const userSlicer = createSlice({
  name: "todos",
  initialState,
  reducers: {
addTodo: (state, action) => {
          state.todos = action.payload ;
          
          
          
    },
    resetTodos: (state) => {
        state.todos = null
          
      },
  }, extraReducers: (builder) => {
    builder.addCase(getTodosUser.fulfilled, (state, action) => {
      console.log(action.payload);
      

      state.todos = action.payload;
      console.log('state.todos: '+state.todos);
    })
    
  },
});
export const getTodos =
  ( ): AppThunk =>
  (dispatch:any, getState:any) => {
  //  const currentValue = selectCount(getState());
    
      dispatch(getTodosUser());
  
  };
 
export const selectTodos= (state:RootState) => state.todos;
export const { addTodo, resetTodos } = userSlicer.actions;
export default userSlicer.reducer;
