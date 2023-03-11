import React, { FC, useState } from 'react';

import { Typography } from '@mui/material';

import { AppLayout, LoadingState } from '../../../components';
import { saveArticleApi } from '../../../services/api/article.api';
import { saveTagApi } from '../../../services/api/tags.api';
import { ChatGPT3Form } from '../components';
import { ArticleForm } from '../components/ArticleForm';
import { useMessageApi } from '../hooks';
import { IArticleFormValues } from '../interfaces';

export const ChatPage: FC = () => {
  const [message, setMessage] = useState<string>('');

  const query = useMessageApi(message);

  const handleArticleSave = async (article: IArticleFormValues) => {
    console.log('saving...', article);
    const promises = article.tags.map(async tag => await saveTagApi(tag));
    await Promise.all(promises);
    console.log('tags saved', article.tags);
    await saveArticleApi(article);
    console.log('article saved!');
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
