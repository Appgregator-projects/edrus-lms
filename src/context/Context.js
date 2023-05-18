import { createContext, useContext, useReducer } from 'react';
import { AuthReducer, initialState } from './Reducer';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

export const UseAuthState = () => {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error('UseAuthState must be used within AuthProvider');
  }
  return context;
};

export const UseAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error('UseAuthDispatch must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [course, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthStateContext.Provider value={course}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
