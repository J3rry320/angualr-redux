import { RootObject } from "../types";
interface IWeather {
  max_temp: number;
}

export interface IAppState extends Partial<RootObject> {}
export const INIT_STATE: IAppState = {
  weather: undefined,
  rain: undefined,
  clouds: undefined
};
export function rootReducer(state, action) {
  return state;
}
