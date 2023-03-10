import { defined } from '../services/types';

export const GPT3_API_KEY = defined(process.env.REACT_APP_GPT3_API_KEY, 'REACT_APP_GPT3_API_KEY');
export const GPT3_MODELS_API_URL = 'https://api.openai.com/v1/models';
export const GPT_3_CHAT_COMPLETIONS_API_URL = 'https://api.openai.com/v1/chat/completions';
export const GPT_3_COMPLETIONS_API_URL = 'https://api.openai.com/v1/completions';
