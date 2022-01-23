export enum ROUTES {
  HOME = 'Home',
  PRODUCT_LIST = 'ProductList',
  PRODUCT = 'Product',
  MY_CART = 'MyCart',
  MY_CART_LIST = 'MyCartList',
  LOGIN = 'Login',
  LOGIN_FIRST = 'LoginFirst',
  MY_PROFILE = 'MyProfile',
  MY_WISH_LIST = 'MyWishList',
  MY_ORDERS = 'MyOrders',
  CHOOSE_COLOR_MODAL = 'ChooseColorModal',
  PRODUCT_ADDED_MODAL = 'ProductAddedModal',
  LOGIN_TO_CONTINUE_MODAL = 'LoginToContinueModal',
  PRODUCT_REMOVED_MODAL = 'ProductRemovedModal',
  ORDER_CONFIRMATION_MODAL = 'OrderConfirmationModal',
  CONNECTION_PROBLEM_MODAL = 'ConnectionProblemModal',
}

export type productAttributes = {
  name: string;
  display_price: string;
  description: string;
};

export type product = {
  attributes: productAttributes;
  id: string;
};

export type productInMyCart = {
  item: product;
  color: string;
};

export type RootStackParamList = {
  ProductList: undefined;
  Product: {item: string};
  MyCart: {screen: string};
  MyCartList: undefined;
  Login: undefined;
  LoginFirst: undefined;
  Home: {screen: string};
  MyProfile: undefined;
  MyWishList: undefined;
  MyOrders: undefined;
  ChooseColorModal: undefined;
  ProductAddedModal: undefined;
  LoginToContinueModal: undefined;
  ProductRemovedModal: undefined;
  OrderConfirmationModal: undefined;
  ConnectionProblemModal: undefined;
};
