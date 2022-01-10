import React from 'react';
import {View, Text} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {ROUTES, RootStackParamList} from '../types';

import Error from '../assets/icons/error.svg';
import Success from '../assets/icons/success.svg';
import Warning from '../assets/icons/warning.svg';
import Box from '../assets/icons/box.svg';

import Button from '../components/Button';

import styles from './styles';

export const ChooseColorModal = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, ROUTES.CHOOSE_COLOR_MODAL>) => {
  return (
    <View style={styles.modalWrapper}>
      <View style={styles.modal}>
        <Error width={66} height={66} />
        <Text style={styles.modalTitle}>Select color</Text>
        <Text style={styles.modalDescription}>
          Please select your color to add this item in your cart
        </Text>
        <Button
          title="Ok"
          containerStyle={styles.modalButton}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export const ProductAddedModal = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, ROUTES.PRODUCT_ADDED_MODAL>) => {
  return (
    <View style={styles.modalWrapper}>
      <View style={styles.modal}>
        <Success width={66} height={66} />
        <Text style={styles.modalTitle}>Product added to your cart</Text>
        <Button
          title="Ok"
          containerStyle={styles.modalButton}
          onPress={() =>
            navigation.navigate(ROUTES.MY_CART, {screen: ROUTES.MY_CART_LIST})
          }
        />
      </View>
    </View>
  );
};

export const LoginToContinueModal = ({
  navigation,
}: NativeStackScreenProps<
  RootStackParamList,
  ROUTES.LOGIN_TO_CONTINUE_MODAL
>) => {
  return (
    <View style={styles.modalWrapper}>
      <View style={styles.modal}>
        <Warning width={66} height={66} />
        <Text style={styles.modalTitle}>Login To Continue</Text>
        <Text style={styles.modalDescription}>
          Please login to add product in your cart
        </Text>
        <View style={styles.buttonsWrapper}>
          <Button
            title="Login"
            containerStyle={styles.modalButton}
            onPress={() => navigation.goBack()}
          />
          <Button
            title="Sign up"
            containerStyle={styles.modalButton}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </View>
  );
};

export const ProductRemovedModal = ({
  navigation,
}: NativeStackScreenProps<
  RootStackParamList,
  ROUTES.PRODUCT_REMOVED_MODAL
>) => {
  return (
    <View style={styles.modalWrapper}>
      <View style={styles.modal}>
        <Success width={66} height={66} />
        <Text style={styles.modalTitle}>Your Cart Status</Text>
        <Text style={styles.modalDescription}>
          Product removed from your cart successfully
        </Text>
        <Button
          title="Ok"
          containerStyle={styles.modalButton}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export const OrderConfirmationModal = ({
  navigation,
}: NativeStackScreenProps<
  RootStackParamList,
  ROUTES.ORDER_CONFIRMATION_MODAL
>) => {
  return (
    <View style={styles.orderConfirmationWrapper}>
      <Text style={styles.orderConfirmationTitle}>Order Confirmation</Text>
      <Box width={130} height={150} />
      <Text style={styles.orderConfirmationSubtitle}>
        Thank you for placing your order with us!
      </Text>
      <Text style={styles.orderConfirmationDescription}>
        Please check your email for more details. For any questions and further
        information please contact our customer support.
      </Text>
      <Button
        title="Continue shopping"
        containerStyle={styles.orderConfirmationButton}
        onPress={() =>
          navigation.navigate(ROUTES.HOME, {screen: ROUTES.PRODUCT_LIST})
        }
      />
    </View>
  );
};
