import React from 'react';
import {Text, View, ScrollView, Dimensions} from 'react-native';

import Slider from '../../components/Slider';
import Button from '../../components/Button';

import styles from './styles';

const windowHeight = Dimensions.get('window').height;

console.log(windowHeight);

const ProductDetails: React.FC = () => {
  return (
    <>
      <ScrollView style={{height: windowHeight - 135}}>
        <Slider />
        <View style={styles.detailsWrapper}>
          <View style={styles.productDetailsWrapper}>
            <Text style={styles.productTitle}>Xiaomi Mi A3</Text>
            <Text style={styles.productPrice}>$244</Text>
          </View>
          <View style={styles.productColorsWrapper}>
            <Text style={styles.colorSectionHeader}>Select Color</Text>
            <View style={styles.colorWrapper}>
              <Text style={styles.color}>Blue</Text>
            </View>
          </View>
          <Text style={styles.descriptionSectionHeader}>Description</Text>
          <Text style={styles.description}>
            The phone features a 6.088 inch HD+ (1560 x 720 pixel) resolution,
            283ppi Super AMOLED display, a glass and plastic body, with Corning
            Gorilla Glass 5 protection on its front as well as its back. It is
            powered by a Qualcomm Snapdragon 665 SoC. It also has a 2.0, Type-C
            1.0 reversible connector. The phone features a 6.088 inch HD+ (1560
            x 720 pixel) resolution, 283ppi Super AMOLED display, a glass and
            plastic body, with Corning Gorilla Glass 5 protection on its front
            as well as its back. It is powered by a Qualcomm Snapdragon 665 SoC.
            It also has a 2.0, Type-C 1.0 reversible connector.
          </Text>
        </View>
      </ScrollView>
      <Button
        title="Add to cart"
        containerStyle={[styles.button, {top: windowHeight - 135}]}
        onPress={() => console.log('add to cart')}
      />
    </>
  );
};

export default ProductDetails;
