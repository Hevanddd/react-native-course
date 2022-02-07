import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {connect} from 'react-redux';

import {getImageById} from '../../requests';
import {order, productInMyCart} from '../../types';

import {selectOrders} from '../../selectors';

import {ROUTES, RootStackParamList} from '../../types';

import styles from './styles';

type navigationProps = NativeStackScreenProps<
  RootStackParamList,
  ROUTES.ORDER_DETAILS
>;

type ProductsDetailsProps = {
  navigation: navigationProps['navigation'];
  route: navigationProps['route'];
  orders: order[];
};

const OrderDetailsScreen = ({
  navigation,
  route,
  orders,
}: ProductsDetailsProps) => {
  const {
    params: {orderId},
  } = route;

  const currentOrder = orders?.find((el: order) => el.id === orderId) as order;

  return (
    <View style={styles.screenWrapper}>
      <View style={styles.propertyWrapper}>
        <Text style={styles.propertyTitle}>Order Id</Text>
        <Text style={styles.propertyValue}>{currentOrder.id}</Text>
      </View>
      <View style={styles.propertyWrapper}>
        <Text style={styles.propertyTitle}>Order Date</Text>
        <Text style={styles.propertyValue}>
          {new Date(currentOrder.date).toLocaleString()}
        </Text>
      </View>
      <View style={styles.propertyWrapper}>
        <Text style={styles.propertyTitle}>Total Amount</Text>
        <Text style={styles.propertyValue}>
          {`$${currentOrder.products.reduce(
            (acc: number, product: productInMyCart) =>
              acc + Number(product.item.attributes.display_price.split('$')[1]),
            0,
          )}`}
        </Text>
      </View>
      <View style={styles.propertyWrapper}>
        <Text style={styles.propertyTitle}>Payment Mode</Text>
        <Text style={styles.propertyValue}>COD</Text>
      </View>
      <View style={styles.propertyWrapper}>
        <Text style={styles.propertyTitle}>Shipping Address</Text>
        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.MAP)}>
          <Text>Location</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.propertyWrapper}>
        <Text style={styles.propertyTitle}>Status</Text>
        <Text style={[styles.propertyValue, styles.greenText]}>
          In-Proccesing
        </Text>
      </View>
      <Text style={styles.productsHeader}>Ordered Products</Text>

      {currentOrder.products.map(({item, color}) => (
        <View key={item.id} style={styles.productWrapper}>
          <View style={styles.itemDescriptionWrapper}>
            <Text style={styles.productTitle}>{item.attributes.name}</Text>
            <Text style={styles.productColor}>Color: {color}</Text>
            <Text style={styles.productPrice}>
              {item.attributes.display_price}
            </Text>
          </View>
          <Image
            style={styles.productImage}
            source={{
              uri: getImageById(item.id, 200),
            }}
          />
        </View>
      ))}
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  orders: selectOrders(state),
});

export default connect(mapStateToProps, null)(OrderDetailsScreen);
