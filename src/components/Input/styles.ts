import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors';
import {font} from '../../styles/font';

const styles = StyleSheet.create({
  inputWrapper: {
    position: 'relative',
    width: '90%',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: COLORS.DARK_GRAY,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 15,
  },
  inputLabel: {
    position: 'absolute',
    top: 12,
    left: 10,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 4,
    ...font.size(12, 16).REGULAR.NEUTRAL_GRAY,
  },
  errorMessage: {
    ...font.size(12, 16).REGULAR.RED,
    marginLeft: 14,
  },
});

export default styles;
