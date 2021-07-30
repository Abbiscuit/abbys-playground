import React, { createContext } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { ReactNode } from 'react';

interface ContextInterface {
  readonly count: number;
  readonly setCount: React.Dispatch<React.SetStateAction<number>>;
}

interface Props {
  children: ReactNode;
}

const CountContext = createContext<ContextInterface | undefined>(undefined);

const CountProvider = (props: Props) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {props.children}
    </CountContext.Provider>
  );
};

export default CountProvider;

export const useCount = () => {
  const context = useContext(CountContext);

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
};
