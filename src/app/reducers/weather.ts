import { SEARCH_WEATHER } from "../actions";
import { INIT_STATE, IAppState } from "./initial-state";
import { RootObject } from "src/types";
import { Reducer } from "redux";

export const weather: Reducer<IAppState | 1> = (
  state: IAppState = null,
  action: any
) => {
  switch (action.type) {
    case SEARCH_WEATHER:
      return action.payload || null;
    default:
      return state;
  }
};
