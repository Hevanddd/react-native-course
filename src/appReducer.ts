import * as actions from './constants';
import {product, productInMyCart} from './types';

export interface appState {
  products: product[];
  isProductsLoading: boolean;
  isLogged: boolean;
  myCart: productInMyCart[];
}

const initialState: appState = {
  products: [],
  isProductsLoading: true,
  isLogged: false,
  myCart: [],
};

const appReducer = (
  state = initialState,
  {type, payload}: {type: any; payload: any},
) => {
  switch (type) {
    case actions.PRODUCTS_REQUEST:
      return {...state, isProductsLoading: true};
    case actions.PRODUCTS_REQUEST_SUCCESS:
      return {...state, products: payload, isProductsLoading: false};
    case actions.ADD_PRODUCT_TO_MY_CART:
      return {...state, myCart: [...state.myCart, payload]};
    case actions.REMOVE_ALL_PRODUCTS_FROM_MY_CART:
      return {...state, myCart: []};
    case actions.REMOVE_PRODUCT_FROM_MY_CART:
      return {
        ...state,
        myCart: state.myCart.filter(
          (el: productInMyCart) => el.item.id !== payload,
        ),
      };
    case actions.USER_LOG_IN:
      return {...state, isLogged: true};
    default:
      return state;
  }
};

export default appReducer;
