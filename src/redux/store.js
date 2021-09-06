import { createStore } from "redux";
import quantityReducer from "./quantityReducer";

const store = createStore(quantityReducer)

export default store