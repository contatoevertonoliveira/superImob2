import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "./private/Clientes/reducers";

export default configureStore({
  reducer: {
    clients: clientReducer,
  },
});
