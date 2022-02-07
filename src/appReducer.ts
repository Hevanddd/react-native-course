import * as actions from './constants';
import {product, productInMyCart, order} from './types';

import {uniqueId} from 'lodash';

export interface appState {
  products: product[];
  isProductsLoading: boolean;
  isProductsError: boolean;
  isLogged: boolean;
  myCart: productInMyCart[];
  myOrders: order[];
}

const initialState: appState = {
  products: [],
  isProductsLoading: true,
  isProductsError: false,
  isLogged: false,
  myCart: [],
  myOrders: [],
};

const appReducer = (
  state = initialState,
  {type, payload}: {type: any; payload: any},
) => {
  switch (type) {
    case actions.PRODUCTS_REQUEST:
      return {
        ...state,
        products: [],
        isProductsLoading: true,
        isProductsError: false,
      };
    case actions.PRODUCTS_REQUEST_SUCCESS:
      return {...state, products: payload, isProductsLoading: false};
    case actions.PRODUCTS_REQUEST_FAILURE:
      return {...state, isProductsLoading: false, isProductsError: true};
    case actions.ADD_PRODUCT_TO_MY_CART:
      return {...state, myCart: [...state.myCart, payload]};
    case actions.PROCEED_ALL_PRODUCTS:
      return {
        ...state,
        myCart: [],
        myOrders: [
          ...state.myOrders,
          {products: state.myCart, date: Date.now(), id: uniqueId()},
        ],
      };
    case actions.REMOVE_PRODUCT_FROM_MY_CART:
      return {
        ...state,
        myCart: state.myCart.filter(
          (el: productInMyCart) => el.item.id !== payload,
        ),
      };
    case actions.USER_LOG_IN:
      return {...state, isLogged: true};
    case actions.USER_LOG_OUT:
      return {...state, isLogged: false};
    default:
      return state;
  }
};

export default appReducer;
