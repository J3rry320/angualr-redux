// import { SEARCH_WEATHER } from "./actions";
import Axios from "axios";
import { ROOT_URL } from "config";
import { RootObject } from "src/types";

export interface IAppState extends RootObject {}
export const INIT_STATE: IAppState = {
  weather: undefined,
  rain: undefined,
  clouds: undefined,
  dt: undefined,
  dt_txt: undefined,
  wind: undefined,
  main: undefined,
  sys: undefined
};
