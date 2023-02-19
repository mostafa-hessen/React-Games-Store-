import { combineReducers } from "redux";
// import { productsReducer } from "./productsReducer";
import { GetDataReducer, GetElementDetailes, GetFavourit } from "./reducerGetUrl";
const reducers = combineReducers({
  allGame: GetDataReducer,
  GameDetailes:GetElementDetailes,
    MyFavouriteGames :GetFavourit
//   product: selectedProductsReducer,
});
export default reducers;