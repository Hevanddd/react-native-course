import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors';
import {font} from '../../styles/font';

const styles = StyleSheet.create({
  headerWrapper: {
    height: 55,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 19,
    paddingRight: 17,
    backgroundColor: COLORS.BLUE,
  },
  rightAction: {
    width: 75,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shadow: {
    paddingBottom: 3,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 5,
  },
  headerTitle: {
    ...font.size(20, 24).MEDIUM.WHITE,
  },
});

export default styles;
