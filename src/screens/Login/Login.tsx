import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {userLogin} from '../../actions';

import styles from './styles';

import {ROUTES, RootStackParamList} from '../../types';

type navigationProps = NativeStackScreenProps<RootStackParamList, ROUTES.LOGIN>;

type LoginProps = {
  navigation: navigationProps['navigation'];
  login: () => void;
};

const LoginScreen = ({navigation, login}: LoginProps) => {
  const onLoginPress = () => {
    login();
    navigation.navigate(ROUTES.MY_CART, {screen: ROUTES.MY_CART_LIST});
  };
  return (
    <View style={styles.screenWrapper}>
      <TouchableOpacity onPress={onLoginPress}>
        <Text>Press to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    login: () => dispatch(userLogin()),
  };
};

export default connect(null, mapDispatchToProps)(LoginScreen);
