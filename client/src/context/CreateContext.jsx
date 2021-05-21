/**
 * create context is used for todo task here useReducer returns state data and triigers action types 
 */
import React, { useReducer, createContext } from 'react';

export default (reducer, actions, initialState) => {
  const Context = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  }
  return { Context, Provider };
};