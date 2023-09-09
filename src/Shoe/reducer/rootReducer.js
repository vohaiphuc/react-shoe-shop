import { combineReducers } from "redux";
import { shoeReducer } from "./shoeReducer.js";

export let rootReducer = combineReducers({ shoeReducer: shoeReducer })