export interface Source {
  id?: any;
  name: string;
}

export interface RootObject {
  author: string;
  content: string;
  description: string;
  publishedAt: Date;
  source: Source;
  title: string;
  url: string;
  urlToImage: string;
}
