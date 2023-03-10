import { useQuery } from 'react-query';

import { GPT3_MESSAGE_REQUEST_NAME } from '../../../config';
import { gpt3ApiChatMessage } from '../../../services/api/gpt3.api';

export const useMessageApi = (message: string) =>
  useQuery([GPT3_MESSAGE_REQUEST_NAME, message], async () => (message ? await gpt3ApiChatMessage(message) : ''));
