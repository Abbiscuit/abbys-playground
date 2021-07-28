import React from 'react';

interface Props {}

const Expensive = (props: Props) => {
  return <p>I am a very slow component tree.</p>;
};

export default Expensive;
