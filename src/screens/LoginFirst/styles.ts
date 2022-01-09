import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors';
import {font} from '../../styles/font';

const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor: COLORS.WHITE,
    height: '100%',
  },
  loginWrapper: {
    marginTop: 175,
    alignItems: 'center',
  },
  title: {
    marginTop: 15,
    ...font.size(20, 25).BOLD.DARK_GRAY,
  },
  description: {
    marginTop: 5,
    ...font.size(15, 20).REGULAR.DARK_GRAY,
  },
  button: {
    backgroundColor: COLORS.BLUE,
    width: 335,
    height: 40,
    marginTop: 35,
  },
  signUp: {
    marginTop: 25,
    ...font.size(15, 20).REGULAR.BLUE_LIGHT,
  },
});

export default styles;
