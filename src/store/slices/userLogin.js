import {createSlice} from "@reduxjs/toolkit"

 


 const userLogin = createSlice({
    name:"loginData",
    initialState : null,
    reducers: {
        Login: (state, action) => {
         return state = action.payload
        }
        
    }

})


console.log("actions",userLogin.actions)
export default userLogin.reducer
export const {Login} = userLogin.actions