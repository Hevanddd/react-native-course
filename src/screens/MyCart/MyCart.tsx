import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {getImageById} from '../../requests';

import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {selectProductsFromMyCart} from '../../selectors';
import {
  removeProductFromMyCart,
  removeAllProductsFromMyCart,
} from '../../actions';

import {ROUTES, RootStackParamList, productInMyCart} from '../../types';

import Box from '../../assets/icons/box.svg';
import SafeIcon from '../../assets/icons/safe.svg';
import Remove from '../../assets/icons/remove.svg';

import Button from '../../components/Button';

import styles from './styles';

type navigationProps = NativeStackScreenProps<
  RootStackParamList,
  ROUTES.PRODUCT
>;

type MyCartProps = {
  navigation: navigationProps['navigation'];
  products: productInMyCart[];
  removeProduct: (id: string) => void;
  removeAllProducts: () => void;
};

const MyCartScreen = ({
  navigation,
  products,
  removeProduct,
  removeAllProducts,
}: MyCartProps) => {
  const onRemovePress = (id: string) => {
    navigation.navigate(ROUTES.PRODUCT_REMOVED_MODAL);
    removeProduct(id);
  };

  const onProceedToPaymentPress = () => {
    navigation.navigate(ROUTES.ORDER_CONFIRMATION_MODAL);
    removeAllProducts();
  };

  return (
    <View style={styles.screenWrapper}>
      {!products.length ? (
        <View style={styles.emptyBoxWrapper}>
          <Box width={130} height={150} />
          <Text style={styles.title}>Your Cart is Empty</Text>
          <Text style={styles.description}>Add products in your cart now </Text>
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
          {products.map(({item, color}) => (
            <View key={item.id} style={styles.productWrapper}>
              <Image
                style={styles.productImage}
                source={{
                  uri: getImageById(item.id, 200),
                }}
              />
              <View style={styles.productDescriptionWrapper}>
                <Text style={styles.productName}>{item.attributes.name}</Text>
                <Text>Color: {color}</Text>
                <Text style={styles.productPrice}>
                  {item.attributes.display_price}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.productRemove}
                onPress={() => onRemovePress(item.id)}>
                <Remove width={17} height={19} />
              </TouchableOpacity>
            </View>
          ))}
          <View style={styles.priceShadow}>
            <View style={styles.priceWrapper}>
              <Text style={styles.priceSectionTitle}>Price details</Text>
              <View style={styles.priceAmountWrapper}>
                <Text style={styles.price}>Amount Payable</Text>
                <Text style={styles.price}>
                  {`$${products.reduce(
                    (acc: number, product: productInMyCart) =>
                      acc +
                      Number(
                        product.item.attributes.display_price.split('$')[1],
                      ),
                    0,
                  )}`}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.greenSignatureWrapper}>
            <SafeIcon width={21} height={23} />
            <Text style={styles.greenText}>
              Safe and Secure Payments 100% Authentic Products
            </Text>
          </View>
          <Button
            title="Proceed to payment"
            containerStyle={[styles.button, styles.proceedButton]}
            onPress={onProceedToPaymentPress}
          />
        </>
      )}
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  products: selectProductsFromMyCart(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    removeProduct: (id: string) => dispatch(removeProductFromMyCart(id)),
    removeAllProducts: () => dispatch(removeAllProductsFromMyCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCartScreen);
