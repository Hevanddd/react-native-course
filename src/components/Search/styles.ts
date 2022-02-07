import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors';
import {font} from '../../styles/font';

const styles = StyleSheet.create({
  searchWrapper: {
    height: 74,
    marginHorizontal: 20,
  },
  shadow: {
    backgroundColor: COLORS.WHITE,

    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  searchIcon: {
    top: 26,
    left: 13,
    width: 15,
    zIndex: 10,
  },
  searchInput: {
    height: 38,
    width: '100%',
    paddingLeft: 45,
    borderWidth: 1,
    borderColor: COLORS.DARK_GRAY,
    borderRadius: 4,
    ...font.size(15).MEDIUM.BLACK,
  },
  searchHistoryWrapper: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  searchHistoryItem: {
    height: 25,
    borderBottomColor: COLORS.DARK_GRAY,
    borderBottomWidth: 0.5,
    paddingTop: 2,
    paddingLeft: 10,
    position: 'relative',
  },
  removeIcon: {
    position: 'absolute',
    zIndex: 10,
    width: 20,
    top: 5,
    right: 0,
  },
});

export default styles;
