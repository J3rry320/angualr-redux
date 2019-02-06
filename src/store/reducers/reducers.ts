import { combineReducers } from "redux";
import { News } from "./allNews";
import { NewsByTopic } from "./newsByTopic";

export const rootReducer = combineReducers({
  News,
  NewsByTopic
});
