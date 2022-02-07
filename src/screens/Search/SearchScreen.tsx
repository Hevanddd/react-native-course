import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

import {connect} from 'react-redux';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import Search from '../../components/Search';

import {getImageById} from '../../requests';

import {selectProducts} from '../../selectors';

import {ROUTES, RootStackParamList, product} from '../../types';

import styles from './styles';

type navigationProps = NativeStackScreenProps<
  RootStackParamList,
  ROUTES.SEARCH
>;

type SearchScreenProps = {
  navigation: navigationProps['navigation'];
  products: product[] | null;
};

const SearchScreen = ({navigation, products}: SearchScreenProps) => {
  const windowHeight = Dimensions.get('window').height;

  const onProductPress = (id: string) => {
    navigation.navigate(ROUTES.PRODUCT, {item: id});
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<product[]>();

  useEffect(() => {
    setFilteredProducts(
      products?.filter(item =>
        item.attributes.name.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    );
  }, [products, searchQuery]);

  return (
    <View style={styles.screenWrapper}>
      <Search onChange={setSearchQuery} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.productList}
        style={{height: windowHeight - 160}}>
        {filteredProducts?.map((item: product) => (
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
              <View style={styles.descriptionWraper}>
                <Text numberOfLines={1} style={styles.productTitle}>
                  {item.attributes.name}
                </Text>

                <Text style={styles.productPrice}>
                  {item.attributes.display_price}
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        ))}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  products: selectProducts(state),
});

export default connect(mapStateToProps, null)(SearchScreen);
