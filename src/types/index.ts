export interface Clouds {
  all: number;
}

export interface Main {
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}
export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface Rain {
  any: Number;
}

export interface Sys {
  pod: string;
}

export interface Wind {
  deg: number;
  speed: number;
}

export interface RootObject {
  clouds: Clouds;
  dt: number;
  dt_txt: string;
  main: Main;
  rain: Rain;
  sys: Sys;
  weather: Weather;
  wind: Wind;
}
