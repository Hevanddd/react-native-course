import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';
import Menu from '../../assets/icons/menu.svg';
import Cart from '../../assets/icons/cart.svg';
import EmptyHeart from '../../assets/icons/empty-heart.svg';
import Back from '../../assets/icons/back.svg';

type HeaderProps = {
  isMainScreen: boolean;
};

const Header: React.FC<HeaderProps> = ({isMainScreen}) => {
  return (
    <View style={styles.shadow}>
      <View style={styles.headerWrapper}>
        {isMainScreen ? (
          <Menu width={17} height={13} />
        ) : (
          <Back width={18} height={18} />
        )}
        {isMainScreen && (
          <Text style={styles.headerTitle}>Ecommerce Store</Text>
        )}
        {!isMainScreen ? (
          <View style={styles.rightAction}>
            <EmptyHeart width={19} height={17} fill={'white'} />
            <Cart width={19} height={19} />
          </View>
        ) : (
          <Cart width={19} height={19} />
        )}
      </View>
    </View>
  );
};

export default Header;
