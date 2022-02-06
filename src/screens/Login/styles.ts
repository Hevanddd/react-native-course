import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors';
import {font} from '../../styles/font';

const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor: COLORS.WHITE,
    height: '100%',
    alignItems: 'center',
  },
  loginTitle: {
    marginTop: 125,
    width: 220,
    textAlign: 'center',
    ...font.size(40, 50).BOLD.BLUE_LIGHT,
  },
  inputs: {
    marginTop: 95,
    width: '100%',
    height: 130,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
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
    zIndex: 1,
    top: 12,
    left: 10,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 4,
    ...font.size(12, 16).REGULAR.NEUTRAL_GRAY,
  },
  loginButton: {
    backgroundColor: COLORS.BLUE,
    width: 335,
    height: 40,
    marginTop: 35,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  buttonTitle: {
    color: COLORS.WHITE,
    position: 'absolute',
  },
  dotsWrapper: {
    position: 'absolute',
    flexDirection: 'row',
  },
  dot: {
    backgroundColor: COLORS.WHITE,
    width: 4,
    height: 4,
    marginHorizontal: 2,
    borderRadius: 50,
  },
  skipLoginButton: {
    backgroundColor: COLORS.DARK_GRAY,
    width: 335,
    height: 40,
    marginTop: 137,
  },
});

export default styles;
