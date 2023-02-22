import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import userLogin from "./slices/userLogin"
import addToCart from "./slices/addToCartSlice";
import  getCart  from "./slices/getCartSlice";



 const store = configureStore({
    reducer:{
        cartDatas:userSlice,
        logins:userLogin,
        addCartData:addToCart,
       getCartData:getCart
    }
})

export default store;
