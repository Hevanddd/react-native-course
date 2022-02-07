import {COLORS} from './../../styles/colors';
import {StyleSheet} from 'react-native';
import {font} from '../../styles/font';

const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor: COLORS.WHITE,
    height: '100%',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  propertyWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  propertyTitle: {
    ...font.size(15, 20).REGULAR.DARK_GRAY,
  },
  propertyValue: {
    ...font.size(15, 20).REGULAR.BLACK,
  },
  greenText: {
    color: COLORS.GREEN,
  },
  productsHeader: {
    marginTop: 35,
    ...font.size(20, 25).BOLD.DARK_GRAY,
    marginBottom: 15,
  },
  productWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingLeft: 10,
    paddingBottom: 11,
    borderRadius: 5,
    backgroundColor: COLORS.WHITE,
    marginTop: 15,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  productImage: {
    height: 100,
    width: 100,
    marginRight: 20,
  },
  itemDescriptionWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  productTitle: {
    ...font.size(15, 20).REGULAR.NEUTRAL_GRAY,
  },
  productColor: {
    ...font.size(15, 15).REGULAR.DARK_GRAY,
  },
  productPrice: {
    ...font.size(15, 20).BOLD.NEUTRAL_GRAY,
  },
});

export default styles;
