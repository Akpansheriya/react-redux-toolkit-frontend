import {createSlice} from "@reduxjs/toolkit"

 


 const getCartSlice = createSlice({
    name:"getCarts",
    initialState :[],
    reducers: {
        getCart: (state, action) => {
         return state = action.payload
        }
        
    }

})

console.log("actions",getCartSlice.actions)
export default getCartSlice.reducer
export const {getCart} = getCartSlice.actions