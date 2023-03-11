import React, { FC } from 'react';

import { Typography } from '@mui/material';

interface Props {
  content: string;
}

export const ShowContent: FC<Props> = ({ content }) => (
  <>
    {content
      .split('\n')
      .filter(line => !!line)
      .map(line => (
        <Typography key={line} variant="body1">
          {line}
        </Typography>
      ))}
  </>
);
