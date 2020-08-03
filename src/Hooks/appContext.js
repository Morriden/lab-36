import React, { useContext } from 'react';

export const AppContext = React.createContext();

export const useList = () => {
  const { state } = useContext(AppContext);
  return state.lists;
};
