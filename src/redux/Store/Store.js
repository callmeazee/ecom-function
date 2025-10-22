import {configureStore} from '@reduxjs/toolkit'
import productReducer from "../Slice/ProductSlice"
import cartReducer from "../Slice/CartSlice"
const store = configureStore(
     {
          reducer: {
               products: productReducer,
               cart: cartReducer
          }
})
export default store