import { convertToKebabCase } from '../../../services/types';
import { ITag } from '../interfaces';

export const mapTag = (tag: string): ITag => ({
  id: convertToKebabCase(tag.trim()),
  tag: tag.trim()
});
