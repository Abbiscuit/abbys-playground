import type { NextPage } from 'next';
import React, { useReducer } from 'react';
import { useState } from 'react';

import EditorView from '../components/editor/EditorView/EditorView';
import Messages from '../components/editor/Messages/Messages';
import { MessageProvider } from '../context/MessageProvider';

const EditorPage: NextPage = () => {
  console.log('EditorPage....');
  // const [message, setMessage] = useState(['']);
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MessageProvider>
      <section>
        <h3>Editor Page</h3>
        <EditorView />
        <Messages />
      </section>
    </MessageProvider>
  );
};

export default EditorPage;
