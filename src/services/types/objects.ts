export type Map<T> = { [key: string]: T };
export type StringsMap = Map<string>;
export type NumbersMap = Map<number>;

export interface IObjectWithId {
  id: string;
}
