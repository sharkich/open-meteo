import 'react-quill/dist/quill.snow.css';
import { FC } from 'react';

import ReactQuill from 'react-quill';

interface Props {
  content: string;
  onChange: (content: string) => void;
}

export const Editor: FC<Props> = ({ content, onChange }) => (
  <ReactQuill theme="snow" value={content} onChange={onChange} />
);
