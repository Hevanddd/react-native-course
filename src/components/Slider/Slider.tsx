import React, {FC} from 'react';
import {FlatList, View, Image, Dimensions} from 'react-native';

import {getImageById} from '../../requests';
import styles from './styles';

const windowWidth = Dimensions.get('window').width;

const renderItem = ({item}: {item: string}) => (
  <View style={[{width: windowWidth}, styles.imageWrapper]}>
    <Image
      style={styles.image}
      key={item}
      source={{
        uri: getImageById(item, 250),
      }}
    />
  </View>
);

export const Slider: FC = () => {
  const images = ['1', '2', '3'] as string[];

  return (
    <View style={styles.sliderWrapper}>
      <FlatList
        keyExtractor={(_, id) => `${id}`}
        horizontal
        data={images}
        renderItem={renderItem}
        showsHorizontalScrollIndicator
      />
    </View>
  );
};
