import axios from 'axios';

import { GPT3_API_KEY } from '../../config/GPT3';

export const gpt3ApiModelsList = async () => {
  const { data } = await axios.get('https://api.openai.com/v1/models', {
    headers: {
      Authorization: `Bearer ${GPT3_API_KEY}`
    }
  });
  console.log('gpt3ApiModelsMils', data);

  return data;
};

export const gpt3ApiChatMessage = async (prompt: string) => {
  const { data } = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      messages: [{ content: prompt, role: 'user' }],
      model: 'gpt-3.5-turbo',
      temperature: 0.7
    },
    {
      headers: {
        Authorization: `Bearer ${GPT3_API_KEY}`
      }
    }
  );
  console.log(prompt, 'response:', data);

  return data;
};

export const gpt3ApiMessage = async (prompt: string) => {
  const { data } = await axios.post(
    'https://api.openai.com/v1/completions',
    {
      logprobs: null,
      max_tokens: 7,
      model: 'davinci',
      n: 1,
      prompt,
      stop: '',
      stream: false,
      temperature: 0,
      top_p: 1
    },
    {
      headers: {
        Authorization: `Bearer ${GPT3_API_KEY}`
      }
    }
  );
  console.log(prompt, 'response:', data);

  return data;
};
