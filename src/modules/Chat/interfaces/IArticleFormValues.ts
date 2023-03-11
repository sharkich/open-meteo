import { IArticle } from './IArticle';

export type IArticleFormValues = Pick<IArticle, 'title' | 'alias' | 'image' | 'content' | 'preamble'> & {
  tags: string[];
};
