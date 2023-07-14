import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'

const initialState = {
  isRestaurant: false,
  isAddNew: false,
  filteredPlaces: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function openRestaurants() {
    dispatch({
      type: 'OPEN_RESTAURANTS',
      payload: true
    });
  }
  function openCafes() {
    dispatch({
      type: 'OPEN_CAFES',
      payload: false
    });
  }

  function openAddNew() {
    dispatch({
      type: 'OPEN_ADD_NEW',
      payload: true
    });
  }

  function closeAddNew() {
    dispatch({
      type: 'CLOSE_ADD_NEW',
      payload: false
    });
  }

  function filterPlaces(filteredPlaces) {
    dispatch({
      type: 'FILTER_PLACES',
      payload: filteredPlaces
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        isRestaurant: state.isRestaurant,
        openRestaurants,
        openCafes,
        isAddNew: state.isAddNew,
        openAddNew,
        closeAddNew,
        showPlaces: state.showPlaces,
        filterPlaces,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};