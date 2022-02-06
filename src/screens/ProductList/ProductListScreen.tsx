import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableHighlight,
  Dimensions,
  RefreshControl,
} from 'react-native';

import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFocusEffect} from '@react-navigation/native';

import Search from '../../components/Search';

import {getImageById} from '../../requests';

import {
  selectProducts,
  selectIsProductsLoading,
  selectIsProductsError,
} from '../../selectors';
import {productsRequest} from '../../actions';

import {ROUTES, RootStackParamList, product} from '../../types';

import styles from './styles';

type navigationProps = NativeStackScreenProps<
  RootStackParamList,
  ROUTES.PRODUCT_LIST
>;

type ProductListScreenProps = {
  navigation: navigationProps['navigation'];
  products: product[] | null;
  isLoading: boolean;
  isError: boolean;
  fetchProducts: () => void;
};

const ProductListScreen = ({
  navigation,
  products,
  isLoading,
  isError,
  fetchProducts,
}: ProductListScreenProps) => {
  useFocusEffect(
    React.useCallback(() => {
      fetchProducts();
    }, [fetchProducts]),
  );
  const windowHeight = Dimensions.get('window').height;

  const onProductPress = (id: string) => {
    navigation.navigate(ROUTES.PRODUCT, {item: id});
  };

  if (isError) {
    navigation.navigate(ROUTES.CONNECTION_PROBLEM_MODAL);
  }

  return (
    <View style={styles.screenWrapper}>
      <Search />
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
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  products: selectProducts(state),
  isLoading: selectIsProductsLoading(state),
  isError: selectIsProductsError(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchProducts: () => dispatch(productsRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListScreen);
