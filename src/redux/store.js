import {createStore} from "redux";
import {webPlayerReducer} from "./webPlayerReducer";

export const store = createStore(webPlayerReducer)

