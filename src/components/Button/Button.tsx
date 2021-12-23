import React, {FC, memo} from 'react';
import {Text, ViewStyle, StyleProp, TouchableOpacity} from 'react-native';
import noop from 'lodash/noop';

import styles from './styles';

export type ButtonProps = {
  title?: string;
  containerStyle?: StyleProp<ViewStyle>;
  onPress: (() => void) | undefined;
};

export const Button: FC<ButtonProps> = memo(
  ({title = '', containerStyle, onPress = noop, ...props}) => {
    const containerStyles = [styles.container, containerStyle];

    return (
      <TouchableOpacity style={containerStyles} onPress={onPress} {...props}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  },
);

export default Button;
