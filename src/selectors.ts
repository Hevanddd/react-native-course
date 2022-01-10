import {appState} from './appReducer';

export const selectProducts = (state: appState) => state.products;
export const selectIsLogged = (state: appState) => state.isLogged;
export const selectIsProductsLoading = (state: appState) =>
  state.isProductsLoading;

export const selectProductsFromMyCart = (state: appState) => state.myCart;
