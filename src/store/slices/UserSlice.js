import {createSlice} from "@reduxjs/toolkit"

 


 const userSlice = createSlice({
    name:"cartData",
    initialState : [],
    reducers: {
        getPizza: (state, action) => {
         return state = action.payload
        }
        
    }

})

console.log("actions",userSlice.actions)
export default userSlice.reducer
export const {getPizza} = userSlice.actions