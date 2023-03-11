import axios from 'axios';

import { ARTICLES_API_KEY } from '../../config';
import { IArticleFormValues } from '../../modules/Chat/interfaces';

export const saveArticleApi = async (article: IArticleFormValues) => {
  const { data } = await axios.post(ARTICLES_API_KEY, { ...article, date: new Date().toISOString() });

  return data;
};
