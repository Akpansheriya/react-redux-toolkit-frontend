import {createSlice} from "@reduxjs/toolkit"

 


 const addtoCart = createSlice({
    name:"addTocarts",
    initialState : [],
    reducers: {
        addCartProduct: (state, action) => {
         return state = {...action.payload}
        }
        
    }

})

console.log("actions",addtoCart.actions)
export default addtoCart.reducer
export const {addCartProduct} = addtoCart.actions