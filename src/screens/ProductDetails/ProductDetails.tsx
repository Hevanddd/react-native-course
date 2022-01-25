import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import {product} from '../../types';

import {selectProducts, selectIsLogged} from '../../selectors';
import {addProductToMyCart} from '../../actions';

import Slider from '../../components/Slider';
import Button from '../../components/Button';

import {ROUTES, RootStackParamList} from '../../types';

import styles from './styles';

type navigationProps = NativeStackScreenProps<
  RootStackParamList,
  ROUTES.PRODUCT
>;

type ProductsDetailsProps = {
  navigation: navigationProps['navigation'];
  route: navigationProps['route'];
  products: product[];
  isLogged: boolean;
  addProduct: (item: product, color: string) => void;
};

const ProductDetailsScreen = ({
  navigation,
  route,
  products,
  isLogged,
  addProduct,
}: ProductsDetailsProps) => {
  const {
    params: {item},
  } = route;

  const currentProduct: product | undefined = products?.find(
    (el: product) => el.id === item,
  );

  const AVAILABLE_COLORS = ['Blue', 'Black', 'Gray'];
  const [productColor, setProductColor] = useState<string | null>(null);

  const onAddProductPress = () => {
    if (!productColor) {
      return navigation.navigate(ROUTES.CHOOSE_COLOR_MODAL);
    }
    if (!isLogged) {
      return navigation.navigate(ROUTES.LOGIN_TO_CONTINUE_MODAL);
    }
    if (currentProduct) {
      addProduct(currentProduct, productColor);
      navigation.navigate(ROUTES.PRODUCT_ADDED_MODAL);
    }
  };

  return (
    <View style={styles.screenWrapper}>
      <ScrollView style={styles.scrollWrapper}>
        <Slider
          images={[
            currentProduct?.id || '1',
            Math.floor(Math.random() * 100).toString(),
            Math.floor(Math.random() * 100).toString(),
          ]}
        />
        <View style={styles.detailsWrapper}>
          <View style={styles.productDetailsWrapper}>
            <Text style={styles.productTitle}>
              {currentProduct?.attributes.name}
            </Text>
            <Text style={styles.productPrice}>
              {currentProduct?.attributes.display_price}
            </Text>
          </View>
          <View style={styles.productColorsWrapper}>
            <Text style={styles.colorSectionHeader}>Select Color</Text>
            <View style={styles.colorWrapper}>
              {AVAILABLE_COLORS.map(color => (
                <TouchableOpacity
                  key={color}
                  onPress={() => setProductColor(color)}>
                  <Text
                    style={[
                      styles.color,
                      productColor === color && styles.activeColor,
                    ]}>
                    {color}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <Text style={styles.descriptionSectionHeader}>Description</Text>
          <Text style={styles.description}>
            {currentProduct?.attributes.description}
          </Text>
        </View>
      </ScrollView>
      <Button
        title="Add to cart"
        containerStyle={styles.button}
        onPress={onAddProductPress}
      />
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  products: selectProducts(state),
  isLogged: selectIsLogged(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addProduct: (item: product, color: string) =>
      dispatch(addProductToMyCart({item, color})),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetailsScreen);
