import { SEARCH_CITY_NEWS, GOT_CITY_NEWS } from "../actions";
import { IAppState } from "./initial-state";
import { Reducer } from "redux";

export const NewsByTopic: Reducer<IAppState> = (
  state: IAppState = null,
  action: any
) => {
  switch (action.type) {
    case SEARCH_CITY_NEWS:
      return action.payload;
    case GOT_CITY_NEWS:
      return action.payload;
    default:
      return state;
  }
};
