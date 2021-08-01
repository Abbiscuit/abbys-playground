import { Dispatch, useCallback, useContext } from 'react';
import { createContext } from 'react';
import { useReducer } from 'react';

const initialState = {
  message: [''],
  inputMsg: '',
};

type State = {
  message: string[];
  inputMsg: string;
};

export type Action =
  | { type: 'add/message'; payload: string }
  | { type: 'add/inputMsg'; payload: string };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'add/message':
      return {
        ...state,
        message: [...state.message, action.payload],
      };
    case 'add/inputMsg':
      return {
        ...state,
        inputMsg: action.payload,
      };
    default:
      return state;
  }
};

export const MessageContext = createContext<
  | {
      message: string[];
      inputMsg: string;
      handleAddMessage: (msg: string) => void;
      handleInputMessage: (msg: string) => void;
    }
  | undefined
>(undefined);

export const MessageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { inputMsg, message } = state;

  const handleAddMessage = useCallback((msg: string) => {
    dispatch({ type: 'add/message', payload: msg });
  }, []);

  const handleInputMessage = useCallback((msg: string) => {
    dispatch({ type: 'add/inputMsg', payload: msg });
  }, []);

  return (
    <MessageContext.Provider
      value={{ inputMsg, message, handleAddMessage, handleInputMessage }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => {
  const context = useContext(MessageContext);

  if (context === undefined) {
    throw new Error('useMessage cannot use outside of MessageProvider tree');
  }

  return context;
};
