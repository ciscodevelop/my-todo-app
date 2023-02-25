import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface userState {
    user: any;
    accessToken: string;
}
const initialState: userState = {
    user: null,
    accessToken: ''
};
const userSlicer = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
          state.user = action.payload ;
          
          
          localStorage.setItem("accessToken", action.payload.accessToken);
          state.accessToken =action.payload.accessToken
    },
    resetUser: (state) => {
        state.user = null
        state.accessToken = ''
        localStorage.clear();
      },
  },
});
export const selectToken = (state: any) => state.accessTokens;
export const selectUser = (state:RootState) => state.user ;
export const { addUser, resetUser } = userSlicer.actions;
export default userSlicer.reducer;
