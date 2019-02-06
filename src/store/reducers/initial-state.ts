// import { SEARCH_WEATHER } from "./actions";

import { RootObject } from "../../types";
export interface IAppState extends RootObject {}
export const INIT_STATE: IAppState = {
  author: undefined,
  content: undefined,
  source: undefined,
  description: undefined,
  publishedAt: undefined,
  title: undefined,
  url: undefined,
  urlToImage: undefined
};
