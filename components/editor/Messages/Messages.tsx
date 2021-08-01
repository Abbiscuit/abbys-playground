import React from 'react';
import { useMessage } from '../../../context/MessageProvider';

interface MessagesProps {}

const Messages = (props: MessagesProps): JSX.Element => {
  const { message } = useMessage();

  console.log('Messages....');

  return (
    <ul>
      {message.map(msg => (
        <li key={msg}>{msg.toString()}</li>
      ))}
    </ul>
  );
};

export default React.memo(Messages);
