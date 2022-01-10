import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import UserLogo from '../../assets/icons/userLogo.svg';
import Button from '../../components/Button';

import {ROUTES, RootStackParamList} from '../../types';

import styles from './styles';

type navigationProps = NativeStackScreenProps<
  RootStackParamList,
  ROUTES.PRODUCT
>;

type MyCartProps = {
  navigation: navigationProps['navigation'];
};

const LoginFirstScreen = ({navigation}: MyCartProps) => {
  return (
    <View style={styles.screenWrapper}>
      <View style={styles.loginWrapper}>
        <UserLogo width={120} height={120} />
        <Text style={styles.title}>Login First!</Text>
        <Text style={styles.description}>Login first to view your cart</Text>
        <Button
          title="Login now"
          containerStyle={styles.button}
          onPress={() => navigation.navigate(ROUTES.LOGIN)}
        />
        <TouchableOpacity onPress={() => console.log('sign up!')}>
          <Text style={styles.signUp}>New here? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginFirstScreen;
