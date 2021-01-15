import { IData } from "./post";

type T = Pick<IData, 'categories' | 'title' | 'tags'>
type Post = { 
  readonly [P in keyof T]: T[P];
}
export interface IListData extends Post {
  content: string
}