import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {getImageById} from '../../requests';

import {connect} from 'react-redux';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {selectOrders} from '../../selectors';

import {ROUTES, RootStackParamList, order} from '../../types';

import Box from '../../assets/icons/box.svg';

import Button from '../../components/Button';

import styles from './styles';

type navigationProps = NativeStackScreenProps<
  RootStackParamList,
  ROUTES.MY_ORDERS
>;

type MyOrdersProps = {
  navigation: navigationProps['navigation'];
  orders: order[];
};

const MyOrdersScreen = ({navigation, orders}: MyOrdersProps) => {
  return (
    <View style={styles.screenWrapper}>
      {!orders.length ? (
        <View style={styles.emptyBoxWrapper}>
          <Box width={130} height={150} />
          <Text style={styles.title}>You don't have any orders</Text>
          <Text style={styles.description}>Go to shop and buy something</Text>
          <Button
            title="Shop now"
            containerStyle={styles.button}
            onPress={() =>
              navigation.navigate(ROUTES.HOME, {screen: ROUTES.PRODUCT_LIST})
            }
          />
        </View>
      ) : (
        <>
          {orders.map(({products, date, id}) => (
            <View key={id} style={styles.orderWrapper}>
              <Text>{new Date(date).toLocaleString()}</Text>
              {products.map(({item: product}) => (
                <View key={product.id} style={styles.productWrapper}>
                  <View style={styles.productDescriptionWrapper}>
                    <Text style={styles.productName}>
                      {product.attributes.name}
                    </Text>
                  </View>
                  <Image
                    style={styles.productImage}
                    source={{
                      uri: getImageById(product.id, 200),
                    }}
                  />
                </View>
              ))}
              <TouchableOpacity
                style={styles.viewOrderWrapper}
                onPress={() =>
                  navigation.navigate(ROUTES.ORDER_DETAILS, {orderId: id})
                }>
                <Text style={styles.viewOrder}>View order details</Text>
              </TouchableOpacity>
            </View>
          ))}
        </>
      )}
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  orders: selectOrders(state),
});

export default connect(mapStateToProps, null)(MyOrdersScreen);
