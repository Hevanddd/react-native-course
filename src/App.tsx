import React from 'react';
import {StatusBar, View} from 'react-native';

import Header from './components/Header';
import ProductListScreen from './screens/ProductList';
import ProductDetails from './screens/ProductDetails';

import styles from './styles';

const App = () => {
  const isMainScreen = true;

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <Header isMainScreen={isMainScreen} />
      <View style={styles.background}>
        {isMainScreen ? <ProductListScreen /> : <ProductDetails />}
      </View>
    </>
  );
};

export default App;
