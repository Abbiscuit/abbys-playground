import React, { ReactNode } from 'react';

interface CountProps {
  children: ReactNode;
}

const Count = ({ children }: CountProps): JSX.Element => {
  const [count, setCount] = React.useState(1);

  const handleCountUp = () => setCount(state => state + 1);

  return (
    <div style={{ marginBottom: count }}>
      <button onClick={handleCountUp}>Count {count}</button>
      {children}
    </div>
  );
};

export default Count;
