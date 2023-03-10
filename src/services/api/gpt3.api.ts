import axios from 'axios';

import {
  GPT3_API_KEY,
  GPT3_MODELS_API_URL,
  GPT_3_CHAT_COMPLETIONS_API_URL,
  GPT_3_COMPLETIONS_API_URL
} from '../../config/GPT3';

const headers = {
  Authorization: `Bearer ${GPT3_API_KEY}`
};

export const gpt3ApiModelsList = async () => {
  const { data } = await axios.get(GPT3_MODELS_API_URL, {
    headers
  });
  console.log('gpt3ApiModelsMils', data);

  return data;
};

export const gpt3ApiChatMessage = async (prompt: string): Promise<string> => {
  const { data } = await axios.post(
    GPT_3_CHAT_COMPLETIONS_API_URL,
    {
      messages: [{ content: prompt, role: 'user' }],
      model: 'gpt-3.5-turbo',
      temperature: 0.7
    },
    {
      headers
    }
  );

  return data.choices[0].message.content;
};

export const gpt3ApiMessage = async (prompt: string) => {
  const { data } = await axios.post(
    GPT_3_COMPLETIONS_API_URL,
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
      headers
    }
  );
  console.log(prompt, 'davinci response:', data);

  return data;
};
