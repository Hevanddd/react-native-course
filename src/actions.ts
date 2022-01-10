import {createAction} from 'redux-actions';
import * as actionTypes from './constants';

export const productsRequest = createAction(actionTypes.PRODUCTS_REQUEST);
export const productsRequestSuccess = createAction(
  actionTypes.PRODUCTS_REQUEST_SUCCESS,
);
export const productsRequestFailure = createAction(
  actionTypes.PRODUCTS_REQUEST_FAILURE,
);
export const addProductToMyCart = createAction(
  actionTypes.ADD_PRODUCT_TO_MY_CART,
);
export const removeProductFromMyCart = createAction(
  actionTypes.REMOVE_PRODUCT_FROM_MY_CART,
);
export const removeAllProductsFromMyCart = createAction(
  actionTypes.REMOVE_ALL_PRODUCTS_FROM_MY_CART,
);
export const userLogin = createAction(actionTypes.USER_LOG_IN);
