import {COLORS} from './../../styles/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor: COLORS.WHITE,
    height: '100%',
    paddingVertical: 30,
    alignItems: 'center',
  },
  profilePhoto: {
    marginTop: 20,
    marginBottom: 50,
    height: 120,
    width: 120,
    borderRadius: 50,
  },
  inputsWrapper: {
    height: 250,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: '90%',
    backgroundColor: COLORS.BLUE,
    marginTop: 52,
  },
  updateButton: {
    marginTop: 52,
  },
  logoutButton: {
    marginTop: 20,
  },
});

export default styles;
