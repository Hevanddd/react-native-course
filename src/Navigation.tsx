import React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import {StatusBar, View, Text, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';

import ProductListScreen from './screens/ProductList';
import ProductDetailsScreen from './screens/ProductDetails';
import MyCart from './screens/MyCart';
import Login from './screens/Login';
import LoginFirst from './screens/LoginFirst';

import {selectIsLogged} from './selectors';

import {
  ChooseColorModal,
  ProductAddedModal,
  LoginToContinueModal,
  ProductRemovedModal,
  OrderConfirmationModal,
} from './modals';

import {ROUTES, RootStackParamList} from './types';
import {COLORS} from './styles/colors';

import Menu from './assets/icons/menu.svg';
import Cart from './assets/icons/cart.svg';
import EmptyHeart from './assets/icons/empty-heart.svg';
import Profile from './assets/icons/profile.svg';
import DrewerHeart from './assets/icons/drewer-heart.svg';
import DrewerCart from './assets/icons/drewer-cart.svg';
import Orders from './assets/icons/orders.svg';
import Email from './assets/icons/email.svg';
import Phone from './assets/icons/phone.svg';
import Share from './assets/icons/share.svg';

import styles from './styles';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const Navigation = ({isLogged}: {isLogged?: boolean}) => {
  const headerStyles: NativeStackNavigationOptions = {
    headerStyle: {
      backgroundColor: COLORS.BLUE,
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontFamily: 'Roboto-Medium',
      fontSize: 20,
    },
  };
  const HomeStack = () => {
    return (
      <Stack.Navigator
        initialRouteName={ROUTES.PRODUCT_LIST}
        screenOptions={{
          ...headerStyles,
        }}>
        <Stack.Screen
          name={ROUTES.PRODUCT_LIST}
          component={ProductListScreen}
          options={({navigation}) => ({
            title: 'Ecommerce Store',
            headerLeft: () => (
              <Menu
                onPress={() => navigation.openDrawer()}
                width={25}
                height={25}
              />
            ),
            headerRight: () => (
              <Cart
                onPress={() =>
                  navigation.navigate(ROUTES.MY_CART, {
                    screen: ROUTES.MY_CART_LIST,
                  })
                }
                width={25}
                height={25}
              />
            ),
          })}
        />
        <Stack.Screen
          name={ROUTES.PRODUCT}
          component={ProductDetailsScreen}
          options={({navigation}) => ({
            title: '',
            headerRight: () => (
              <View style={styles.rightHeaderIcons}>
                <EmptyHeart
                  onPress={() => console.log('LIKE PRODUCT')}
                  width={19}
                  height={17}
                  fill={'white'}
                />
                <Cart
                  onPress={() =>
                    navigation.navigate(ROUTES.MY_CART, {
                      screen: ROUTES.MY_CART_LIST,
                    })
                  }
                  width={25}
                  height={25}
                />
              </View>
            ),
          })}
        />
        <Stack.Group
          screenOptions={({navigation}) => ({
            presentation: 'modal',
            title: '',
            headerRight: () => (
              <View style={styles.rightHeaderIcons}>
                <EmptyHeart
                  onPress={() => console.log('LIKE PRODUCT')}
                  width={19}
                  height={17}
                  fill={'white'}
                />
                <Cart
                  onPress={() =>
                    navigation.navigate(ROUTES.MY_CART, {
                      screen: ROUTES.MY_CART_LIST,
                    })
                  }
                  width={25}
                  height={25}
                />
              </View>
            ),
          })}>
          <Stack.Screen
            name={ROUTES.CHOOSE_COLOR_MODAL}
            component={ChooseColorModal}
          />
          <Stack.Screen
            name={ROUTES.PRODUCT_ADDED_MODAL}
            component={ProductAddedModal}
          />
          <Stack.Screen
            name={ROUTES.LOGIN_TO_CONTINUE_MODAL}
            component={LoginToContinueModal}
          />
        </Stack.Group>
      </Stack.Navigator>
    );
  };

  const MyCartStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          ...headerStyles,
          title: 'My Cart',
        }}>
        {isLogged ? (
          <>
            <Stack.Screen
              name={ROUTES.MY_CART_LIST}
              component={MyCart}
              options={({navigation}) => ({
                headerLeft: () => (
                  <Menu
                    onPress={() => navigation.openDrawer()}
                    width={25}
                    height={25}
                  />
                ),
              })}
            />
            <Stack.Screen
              name={ROUTES.PRODUCT_REMOVED_MODAL}
              component={ProductRemovedModal}
              options={({navigation}) => ({
                headerRight: () => (
                  <Menu
                    onPress={() =>
                      navigation.navigate(ROUTES.MY_CART, {
                        screen: ROUTES.MY_CART_LIST,
                      })
                    }
                    width={25}
                    height={25}
                  />
                ),
                presentation: 'modal',
              })}
            />
            <Stack.Screen
              name={ROUTES.ORDER_CONFIRMATION_MODAL}
              component={OrderConfirmationModal}
              options={{
                presentation: 'modal',
                headerShown: false,
              }}
            />
          </>
        ) : (
          <Stack.Screen
            name={ROUTES.LOGIN_FIRST}
            component={LoginFirst}
            options={({navigation}) => ({
              headerLeft: () => (
                <Menu
                  onPress={() => navigation.openDrawer()}
                  width={25}
                  height={25}
                />
              ),
            })}
          />
        )}
      </Stack.Navigator>
    );
  };

  function CustomDrawerContent(props: DrawerContentComponentProps) {
    return (
      <DrawerContentScrollView {...props}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate(ROUTES.HOME, {
              screen: ROUTES.PRODUCT_LIST,
            })
          }>
          <Text style={styles.drawerTitle}>Ecommerce Store</Text>
        </TouchableOpacity>
        <Text style={styles.drawerSectionTitle}>My Account</Text>
        <DrawerItem
          label="My Profile"
          icon={() => <Profile width={17} height={17} />}
          onPress={() => props.navigation.navigate(ROUTES.MY_PROFILE)}
          style={styles.drawerItem}
          labelStyle={{...styles.drawerItemText}}
        />
        <DrawerItem
          label="My Wish List"
          icon={() => <DrewerHeart width={17} height={17} />}
          onPress={() => props.navigation.navigate(ROUTES.MY_WISH_LIST)}
          style={styles.drawerItem}
          labelStyle={{...styles.drawerItemText}}
        />
        <DrawerItem
          label="My Cart"
          icon={() => <DrewerCart width={17} height={17} />}
          onPress={() =>
            props.navigation.navigate(ROUTES.MY_CART, {
              screen: ROUTES.MY_CART_LIST,
            })
          }
          style={styles.drawerItem}
          labelStyle={{...styles.drawerItemText}}
        />
        <DrawerItem
          label="My Orders"
          icon={() => <Orders width={17} height={17} />}
          onPress={() => props.navigation.navigate(ROUTES.MY_ORDERS)}
          style={styles.drawerItem}
          labelStyle={{...styles.drawerItemText}}
        />
        <View style={styles.drawerSeparator} />
        <Text style={styles.drawerSectionTitle}>Support</Text>

        <DrawerItem
          label="Email"
          onPress={() => console.log('Mail ')}
          icon={() => <Email width={17} height={17} />}
          style={styles.drawerItem}
          labelStyle={{...styles.drawerItemText}}
        />
        <DrawerItem
          label="Call"
          onPress={() => console.log('Call')}
          icon={() => <Phone width={17} height={17} />}
          style={styles.drawerItem}
          labelStyle={{...styles.drawerItemText}}
        />
        <View style={styles.drawerSeparator} />
        <DrawerItem
          label="Share"
          onPress={() => console.log('Share')}
          icon={() => <Share width={17} height={17} />}
          style={styles.drawerItem}
          labelStyle={{...styles.drawerItemText}}
        />
      </DrawerContentScrollView>
    );
  }
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />

      <Drawer.Navigator
        initialRouteName={ROUTES.HOME}
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          ...(headerStyles as DrawerNavigationOptions),

          headerShown: false,
        }}>
        <Drawer.Screen name={ROUTES.HOME} component={HomeStack} />
        <Drawer.Screen name={ROUTES.MY_CART} component={MyCartStack} />
        <Drawer.Screen name={ROUTES.LOGIN} component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state: any) => ({
  isLogged: selectIsLogged(state),
});

export default connect(mapStateToProps, null)(Navigation);
