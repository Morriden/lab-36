import React, { useReducer } from 'react';
import { useEffect } from 'react';
import { fetchList } from '../Services/rickandmortyApi';
import reducer, { initialState } from '../Reducers/appReducer';
import { AppContext } from '../Hooks/appContext';

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = ({ target }) => {
    if(target.name === 'increment') {
      dispatch({ type: 'INCREMENT_PAGE' });
    }
    if(target.name === 'decrement') {
      dispatch({ type: 'DECREMENT_PAGE' });
    }
  };
 
  useEffect(() => {
    const { currentPage } = state;
    fetchList(currentPage)
      .then(payload => dispatch({ type: 'SET_LISTS', payload }));
  }, [state.currentPage]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {state.currentPage > 1 && <button name='decrement' onClick={handleClick}>Previous</button>}
      <div>{state.currentPage}</div>
      {state.currentPage < state.maxPages && <button name='increment' onClick={handleClick}>Next</button>}
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
