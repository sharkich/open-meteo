import { defined } from '../services/types';

export const GPT3_API_KEY = defined(process.env.REACT_APP_GPT3_API_KEY, 'REACT_APP_GPT3_API_KEY');
