import axios from "axios"
import { useAppSelector } from "../../app/hooks"
import { selectUser } from "../user/userSlice"
import { store } from "../../app/store"
 
export const FetchTodos =async ( ) => {
     
    const accessToken = store.getState().user.accessToken;
     
    
     
   const response = await axios.get("http://localhost:8800/api/todos", {
        headers: {
            Authorization: "Bearer "+ accessToken
        },
             
   })
    return response.data
     
              
          
       
}