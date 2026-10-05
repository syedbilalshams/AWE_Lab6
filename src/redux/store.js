import { legacy_createStore as createStore } from "redux";
import counterReducer from "./reducers";

// createStore is exported as legacy_createStore in Redux 5
const store = createStore(counterReducer);

export default store;
