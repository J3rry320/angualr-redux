import { Reducer } from "redux";
import { GOT_WEATHER, SEARCH_WEATHER } from "../actions";
import { IAppState } from "./initial-state";

export const weather: Reducer<IAppState> = (
  state: IAppState = null,
  action: any
) => {
  switch (action.type) {
    case SEARCH_WEATHER:
      return action.payload;
    case GOT_WEATHER:
      return action.payload;
    default:
      return state;
  }
};
