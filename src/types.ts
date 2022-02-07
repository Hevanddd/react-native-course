export enum ROUTES {
  HOME = 'Home',
  PRODUCT_LIST = 'ProductList',
  PRODUCT = 'Product',
  SEARCH = 'Search',
  MY_CART = 'MyCart',
  MY_CART_LIST = 'MyCartList',
  LOGIN = 'Login',
  LOGIN_FIRST = 'LoginFirst',
  MY_PROFILE = 'MyProfile',
  MY_PROFILE_MAIN = 'MyProfileMain',
  MY_WISH_LIST = 'MyWishList',
  MY_ORDERS = 'MyOrders',
  MY_ORDERS_LIST = 'MyOrdersList',
  MAP = 'Map',
  ORDER_DETAILS = 'OrderDetails',
  CHOOSE_COLOR_MODAL = 'ChooseColorModal',
  PRODUCT_ADDED_MODAL = 'ProductAddedModal',
  LOGIN_TO_CONTINUE_MODAL = 'LoginToContinueModal',
  PRODUCT_REMOVED_MODAL = 'ProductRemovedModal',
  ORDER_CONFIRMATION_MODAL = 'OrderConfirmationModal',
  CONNECTION_PROBLEM_MODAL = 'ConnectionProblemModal',
  LOGOUT_MODAL = 'LogoutModal',
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

export type order = {
  products: productInMyCart[];
  date: Date;
  id: string;
};

export type RootStackParamList = {
  ProductList: undefined;
  Product: {item: string};
  Search: undefined;
  MyCart: {screen: string};
  MyCartList: undefined;
  Login: undefined;
  LoginFirst: undefined;
  Home: {screen: string};
  MyProfile: undefined;
  MyProfileMain: undefined;
  MyWishList: undefined;
  MyOrders: undefined;
  MyOrdersList: undefined;
  OrderDetails: {orderId: string};
  Map: undefined;
  ChooseColorModal: undefined;
  ProductAddedModal: undefined;
  LoginToContinueModal: undefined;
  ProductRemovedModal: undefined;
  OrderConfirmationModal: undefined;
  ConnectionProblemModal: undefined;
  LogoutModal: undefined;
};
