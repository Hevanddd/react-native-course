import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  RefreshControl,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import {getImageById} from '../../../../requests';

import {selectProducts, selectIsProductsLoading} from '../../../../selectors';
import {productsRequest} from '../../../../actions';

import {product} from '../../../../types';

import styles from './styles';

type ProductsListProps = {
  onProductPress: (id: string) => void;
  products: product[] | null;
  isLoading: boolean;
  fetchProducts: () => void;
};

const windowHeight = Dimensions.get('window').height;

const ProductsList = ({
  onProductPress,
  products,
  fetchProducts,
  isLoading,
}: ProductsListProps) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.productList}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={fetchProducts} />
      }
      style={{height: windowHeight - 160}}>
      {!isLoading &&
        products?.map((item: product) => (
          <TouchableHighlight
            key={item.id}
            onPress={() => onProductPress(item.id)}
            underlayColor={'white'}
            style={styles.shadow}>
            <View key={item.id} style={styles.productWrapper}>
              <Image
                style={styles.productImage}
                source={{
                  uri: getImageById(item.id, 200),
                }}
              />

              <Text numberOfLines={1} style={styles.productTitle}>
                {item.attributes.name}
              </Text>

              <Text style={styles.productPrice}>
                {item.attributes.display_price}
              </Text>
            </View>
          </TouchableHighlight>
        ))}
    </ScrollView>
  );
};

const mapStateToProps = (state: any) => ({
  products: selectProducts(state),
  isLoading: selectIsProductsLoading(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchProducts: () => dispatch(productsRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
