import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../todo/todoSlice"; // make sure the path is correct

const store = configureStore({
  reducer: {
    todos: todoReducer,  // this key matches your useSelector
  }
});

export default store; // default export so main.jsx works
