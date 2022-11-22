import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import  storage from "redux-persist/lib/storage"

import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducer";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer
} from "./reducers/userReducers";

const persistConfig = {
  key:"root",
  storage,
  whitelist: ["cart","userLogin"]
}

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateProfileReducer
})

export default persistReducer(persistConfig, rootReducer)
