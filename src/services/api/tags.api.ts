import axios from 'axios';

import { TAGS_API_KEY } from '../../config';
import { ITag } from '../../modules/Chat/interfaces';

export const saveTagApi = async (tag: ITag) => {
  const { data } = await axios.post(TAGS_API_KEY, tag);

  return data;
};
