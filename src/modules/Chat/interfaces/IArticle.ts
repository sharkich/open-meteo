import { ITag } from './ITag';

export interface IArticle {
  readonly id: string;
  readonly title: string;
  readonly alias: string;
  readonly image: string;
  readonly preamble: string;
  readonly content: string;
  readonly date: string;
  readonly tags: ITag[];
}
