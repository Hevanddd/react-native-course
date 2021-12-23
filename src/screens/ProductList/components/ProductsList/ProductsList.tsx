import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, RefreshControl} from 'react-native';
import {getProducts, getImageById} from '../../../../requests';

import styles from './styles';

type attributes = {
  name: string;
  display_price: string;
};

type product = {
  attributes: attributes;
  id: string;
};

const ProductsList: React.FC = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getProducts().then(res => {
      setProducts(res.data.data);
      setRefreshing(false);
    });
  }, []);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => {
      setProducts(res.data.data);
    });
  }, []);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.productList}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {!refreshing &&
        products.map(({attributes, id}: product) => (
          <View key={id} style={styles.shadow}>
            <View key={id} style={styles.productWrapper}>
              <Image
                style={styles.productImage}
                source={{
                  uri: getImageById(id, 200),
                }}
              />

              <Text numberOfLines={1} style={styles.productTitle}>
                {attributes.name}
              </Text>

              <Text style={styles.productPrice}>
                {attributes.display_price}
              </Text>
            </View>
          </View>
        ))}
    </ScrollView>
  );
};

export default ProductsList;
