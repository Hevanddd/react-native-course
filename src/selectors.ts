import {appState} from './appReducer';

export const selectProducts = (state: appState) => state.products;
export const selectIsLogged = (state: appState) => state.isLogged;
export const selectIsProductsLoading = (state: appState) =>
  state.isProductsLoading;
export const selectIsProductsError = (state: appState) => state.isProductsError;

export const selectProductsFromMyCart = (state: appState) => state.myCart;
export const selectOrders = (state: appState) => state.myOrders;
