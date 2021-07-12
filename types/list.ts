import { IData } from "./post";

type T = Pick<IData, 'categories' | 'title' | 'tags' | 'thumbnail'>
type Post = { 
  readonly [P in keyof T]: T[P];
}
export interface IListData extends Post {
  url: string
  content: string,
  createDate: string,
}