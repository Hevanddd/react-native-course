import React from 'react';
import {View} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import Search from '../../components/Search';
import ProductList from './components/ProductsList';

import {ROUTES, RootStackParamList} from '../../types';

import styles from './styles';

const ProductListScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, ROUTES.PRODUCT_LIST>) => {
  const onProductPress = (id: string) => {
    navigation.navigate(ROUTES.PRODUCT, {item: id});
  };
  return (
    <View style={styles.screenWrapper}>
      <Search />
      <ProductList onProductPress={onProductPress} />
    </View>
  );
};

export default ProductListScreen;
