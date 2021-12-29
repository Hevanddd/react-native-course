import React from 'react';
import {View, TextInput} from 'react-native';
import SearchIcon from '../../assets/icons/search.svg';

import styles from './styles';

const Search: React.FC = () => {
  return (
    <View style={styles.shadow}>
      <View style={styles.searchWrapper}>
        <SearchIcon width={17} height={17} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
        />
      </View>
    </View>
  );
};

export default Search;
