import React, {FC, useRef, useEffect} from 'react';
import {View, TextInput, Animated} from 'react-native';

import styles from './styles';

export type InputProps = {
  label: string;
  error?: string;
  onChange: (text: string) => void;
};

export const Input: FC<InputProps> = ({label, onChange, error}) => {
  const translationForLabel = useRef(
    new Animated.ValueXY({x: 0, y: 0}),
  ).current;
  const zIndexForLabel = useRef(new Animated.Value(0)).current;

  const translationForErrorMessage = useRef(new Animated.Value(-150)).current;

  const onInputFocus = () => {
    Animated.timing(zIndexForLabel, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
    Animated.timing(translationForLabel.x, {
      toValue: 5,
      useNativeDriver: true,
    }).start();
    Animated.timing(translationForLabel.y, {
      toValue: -20,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (error) {
      Animated.timing(translationForErrorMessage, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
    if (!error) {
      Animated.timing(translationForErrorMessage, {
        toValue: -150,
        useNativeDriver: true,
      }).start();
    }
  }, [error, translationForErrorMessage]);

  return (
    <View style={styles.inputWrapper}>
      <Animated.Text
        style={[
          styles.inputLabel,
          {
            transform: [
              {translateX: translationForLabel.x},
              {translateY: translationForLabel.y},
            ],
            zIndex: zIndexForLabel,
          },
        ]}>
        {label}
      </Animated.Text>
      <TextInput
        style={styles.input}
        onFocus={onInputFocus}
        onChangeText={onChange}
      />
      <Animated.Text
        style={[
          styles.errorMessage,
          {
            transform: [{translateX: translationForErrorMessage}],
          },
        ]}>
        {error}
      </Animated.Text>
    </View>
  );
};

export default Input;
