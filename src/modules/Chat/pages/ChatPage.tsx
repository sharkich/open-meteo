import React, { FC, useState } from 'react';

import { Typography } from '@mui/material';

import { AppLayout, LoadingState } from '../../../components';
import { saveTagApi } from '../../../services/api/tags.api';
import { ChatGPT3Form } from '../components';
import { ArticleForm } from '../components/ArticleForm';
import { useMessageApi } from '../hooks';
import { IArticleFormValues } from '../interfaces';
import { mapTag } from '../maps';

export const ChatPage: FC = () => {
  const [message, setMessage] = useState<string>('');

  const query = useMessageApi(message);

  const save = async (chips: string[]) => {
    const tags = chips.map(mapTag);
    const promises = tags.map(async tag => await saveTagApi(tag));
    await Promise.all(promises);
    console.log('save', tags);
  };

  const handleArticleSave = (article: IArticleFormValues) => {
    console.log('save', article);
    if (article.content === 'save') {
      void save(article.tags);
    }
  };

  return (
    <AppLayout>
      <Typography variant="h1">GPT3 Chat</Typography>

      <ChatGPT3Form setMessage={setMessage} />

      <LoadingState {...query}>
        {query.data ? <ArticleForm content={query.data} onSubmit={handleArticleSave} /> : null}
      </LoadingState>
    </AppLayout>
  );
};
