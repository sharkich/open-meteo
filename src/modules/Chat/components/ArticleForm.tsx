import React, { ChangeEvent, FC, useState } from 'react';

import { Box, Button, Paper, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { MuiChipsInput } from 'mui-chips-input';

import { Editor } from '../../../components/Editor';
import { IArticleFormValues } from '../interfaces';
import { mapAlias, mapTag } from '../maps';

interface Props {
  content: string;
  onSubmit: (article: IArticleFormValues) => void;
}

export const ArticleForm: FC<Props> = ({ content, onSubmit }) => {
  const [chips, setChips] = useState<string[]>([]);

  const formik = useFormik({
    initialValues: {
      alias: '',
      content,
      image: '',
      preamble: '',
      tags: [],
      title: ''
    },
    onSubmit: values => {
      onSubmit({ ...values, tags: chips.map(mapTag) });
    }
  });

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(event);
    formik.setFieldValue('alias', mapAlias(event.target.value));
  };

  return (
    <Paper
      noValidate
      autoComplete="off"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '75ch' },
        m: 1,
        p: 1
      }}
      onSubmit={formik.handleSubmit}
    >
      <Box sx={{ m: 1 }}>
        <TextField
          fullWidth
          id="title"
          label="Title"
          name="title"
          type="text"
          value={formik.values.title}
          variant="outlined"
          onChange={handleTitleChange}
        />
      </Box>
      <Box sx={{ m: 1 }}>
        <TextField
          fullWidth
          id="alias"
          label="Alias"
          name="alias"
          type="text"
          value={formik.values.alias}
          variant="outlined"
          onChange={formik.handleChange}
        />
      </Box>
      <Box sx={{ m: 1 }}>
        <TextField
          fullWidth
          id="image"
          label="Image"
          name="image"
          type="text"
          value={formik.values.image}
          variant="outlined"
          onChange={formik.handleChange}
        />
      </Box>
      <Box sx={{ m: 1, p: 1 }}>
        <Editor
          content={formik.values.content}
          onChange={async value => await formik.setFieldValue('content', value)}
        />
      </Box>
      <Box sx={{ m: 1 }}>
        <TextField
          fullWidth
          multiline
          id="preamble"
          label="Preamble"
          name="preamble"
          type="text"
          value={formik.values.preamble}
          variant="outlined"
          onChange={formik.handleChange}
        />
      </Box>

      <Box sx={{ m: 1 }}>
        <MuiChipsInput label="Tags" value={chips} onChange={setChips} />
      </Box>

      <Box sx={{ m: 1, p: 1 }}>
        <Button color="secondary" type="submit" variant="contained">
          Save
        </Button>
      </Box>
    </Paper>
  );
};
