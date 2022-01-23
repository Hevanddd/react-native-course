import React, {useState, useRef} from 'react';
import {View, Text, Animated, TouchableWithoutFeedback} from 'react-native';

import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {userLogin} from '../../actions';

import styles from './styles';
import {COLORS} from '../../styles/colors';

import {ROUTES, RootStackParamList} from '../../types';

import Input from '../../components/Input';
import Button from '../../components/Button';

type navigationProps = NativeStackScreenProps<RootStackParamList, ROUTES.LOGIN>;

type LoginProps = {
  navigation: navigationProps['navigation'];
  login: () => void;
};

const LoginScreen = ({navigation, login}: LoginProps) => {
  const loginUser = () => {
    login();
    navigation.navigate(ROUTES.MY_CART, {
      screen: ROUTES.MY_CART_LIST,
    });
  };

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    if (!email) {
      setEmailError('Email is required');
      return false;
    }
    if (
      !String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      setEmailError('Enter valid email');
      return false;
    }
    return true;
  };
  const validatePassword = () => {
    if (!password) {
      setPasswordError('Password is required');
      return false;
    }
    return true;
  };

  const LOGIN_BUTTON_COLOR_MAP = {
    0: COLORS.BLUE,
    1: COLORS.RED,
    2: COLORS.GREEN,
  };

  const [loginButtonState, setLoginButtonState] = useState(0);
  const loginButtonWidth = useRef(new Animated.Value(335)).current;
  const loginButtonSignInTitleOpacity = useRef(new Animated.Value(1)).current;
  const loginButtonSuccessTitleOpacity = useRef(new Animated.Value(0)).current;
  const loginButtonFailedTitleOpacity = useRef(new Animated.Value(0)).current;
  const loginButtonDotsOpacity = useRef(new Animated.Value(0)).current;
  const loginButtonTranslationFirstDot = useRef(new Animated.Value(0)).current;
  const loginButtonTranslationSecondDot = useRef(new Animated.Value(0)).current;
  const loginButtonTranslationThirdDot = useRef(new Animated.Value(0)).current;

  const onLoginPress = () => {
    Animated.sequence([
      Animated.timing(loginButtonSignInTitleOpacity, {
        toValue: 0,
        useNativeDriver: true,
      }),
      Animated.timing(loginButtonWidth, {
        toValue: 45,
        useNativeDriver: false,
      }),
      Animated.timing(loginButtonDotsOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(loginButtonTranslationFirstDot, {
        toValue: -10,
        useNativeDriver: true,
      }),
      Animated.timing(loginButtonTranslationFirstDot, {
        toValue: 0,
        useNativeDriver: true,
      }),
      Animated.timing(loginButtonTranslationSecondDot, {
        toValue: -10,
        useNativeDriver: true,
      }),
      Animated.timing(loginButtonTranslationSecondDot, {
        toValue: 0,
        useNativeDriver: true,
      }),
      Animated.timing(loginButtonTranslationThirdDot, {
        toValue: -10,
        useNativeDriver: true,
      }),
      Animated.timing(loginButtonTranslationThirdDot, {
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (!validateEmail() || !validatePassword()) {
        setLoginButtonState(1);
        Animated.sequence([
          Animated.timing(loginButtonWidth, {
            toValue: 335,
            useNativeDriver: false,
          }),
          Animated.timing(loginButtonDotsOpacity, {
            toValue: 0,
            useNativeDriver: true,
          }),
          Animated.timing(loginButtonFailedTitleOpacity, {
            toValue: 1,
            useNativeDriver: true,
          }),
        ]).start();
      } else {
        setLoginButtonState(2);
        Animated.sequence([
          Animated.timing(loginButtonWidth, {
            toValue: 335,
            useNativeDriver: false,
          }),
          Animated.timing(loginButtonDotsOpacity, {
            toValue: 0,
            useNativeDriver: true,
          }),
          Animated.timing(loginButtonSuccessTitleOpacity, {
            toValue: 1,
            useNativeDriver: true,
          }),
        ]).start(() => {
          setTimeout(loginUser, 1500);
        });
      }
    });
  };

  const onInputChange = () => {
    if (loginButtonState) {
      Animated.timing(loginButtonSuccessTitleOpacity, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
      Animated.timing(loginButtonFailedTitleOpacity, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
      Animated.timing(loginButtonSignInTitleOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
      setLoginButtonState(0);
    }
  };

  return (
    <View style={styles.screenWrapper}>
      <Text style={styles.loginTitle}>ECommerce Store</Text>
      <View style={styles.inputs}>
        <Input
          label="Email Address"
          onChange={value => {
            setEmail(value);
            setEmailError('');
            onInputChange();
          }}
          error={emailError}
        />
        <Input
          label="Password"
          onChange={value => {
            setPassword(value);
            setPasswordError('');
            onInputChange();
          }}
          error={passwordError}
        />
      </View>
      <TouchableWithoutFeedback
        onPress={onLoginPress}
        disabled={!!loginButtonState}>
        <Animated.View
          style={[
            styles.loginButton,
            {
              width: loginButtonWidth,
              backgroundColor: (LOGIN_BUTTON_COLOR_MAP as any)[
                loginButtonState
              ],
            },
          ]}>
          <Animated.Text
            style={[
              styles.buttonTitle,
              {opacity: loginButtonSignInTitleOpacity},
            ]}>
            Sign in
          </Animated.Text>
          <Animated.Text
            style={[
              styles.buttonTitle,
              {opacity: loginButtonSuccessTitleOpacity},
            ]}>
            Success
          </Animated.Text>
          <Animated.Text
            style={[
              styles.buttonTitle,
              {opacity: loginButtonFailedTitleOpacity},
            ]}>
            Ops! Try again
          </Animated.Text>
          <Animated.View
            style={[styles.dotsWrapper, {opacity: loginButtonDotsOpacity}]}>
            <Animated.View
              style={[
                styles.dot,
                {
                  transform: [{translateY: loginButtonTranslationFirstDot}],
                },
              ]}
            />
            <Animated.View
              style={[
                styles.dot,
                {
                  transform: [{translateY: loginButtonTranslationSecondDot}],
                },
              ]}
            />
            <Animated.View
              style={[
                styles.dot,
                {
                  transform: [{translateY: loginButtonTranslationThirdDot}],
                },
              ]}
            />
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
      <Button
        title="Skip Login"
        containerStyle={styles.skipLoginButton}
        onPress={loginUser}
      />
    </View>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    login: () => dispatch(userLogin()),
  };
};

export default connect(null, mapDispatchToProps)(LoginScreen);
