import React, { FormEvent } from 'react';
import { useMessage } from '../../../context/MessageProvider';

import s from './EditorView.module.scss';

interface EditorViewProps {}

const EditorView = (props: EditorViewProps): JSX.Element => {
  const { inputMsg, handleAddMessage, handleInputMessage } = useMessage();

  console.log('EditorView...');

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    handleAddMessage(inputMsg);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={e => handleInputMessage(e.target.value)}
          value={inputMsg}
          type="text"
          placeholder="Editor Input"
        />
        <button>Add Input Message</button>
      </form>
    </div>
  );
};

export default React.memo(EditorView);
