import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors';
import {font} from '../../styles/font';

const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor: COLORS.WHITE,
  },
  productList: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  productWrapper: {
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
  },
  productImage: {
    height: 100,
    width: 100,
    paddingVertical: 5,
  },
  descriptionWraper: {
    marginLeft: 15,
  },
  productTitle: {
    marginTop: 5,
    ...font.size(15).MEDIUM.NEUTRAL_GRAY,
  },
  shadow: {
    shadowColor: COLORS.BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 6,
    width: '100%',
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 5,

    backgroundColor: 'transparent',
  },
  productPrice: {
    marginTop: 10,
    ...font.size(15).BOLD.NEUTRAL_GRAY,
  },
});

export default styles;
