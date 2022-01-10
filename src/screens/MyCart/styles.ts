import {COLORS} from './../../styles/colors';
import {StyleSheet} from 'react-native';
import {font} from '../../styles/font';

const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    height: '100%',
  },
  emptyBoxWrapper: {
    marginTop: 130,
    alignItems: 'center',
  },
  title: {
    marginTop: 35,
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
  productWrapper: {
    flexDirection: 'row',
    width: 335,
    height: 145,
    paddingTop: 5,
    paddingLeft: 10,
    paddingBottom: 11,
    paddingRight: 8,
    borderRadius: 5,
    backgroundColor: COLORS.WHITE,
    marginTop: 36,

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
  },
  productDescriptionWrapper: {
    marginLeft: 10,
    marginTop: 18.5,
  },
  productName: {
    ...font.size(15, 20).REGULAR.NEUTRAL_GRAY,
  },
  productPrice: {
    marginTop: 5,
  },
  productRemove: {
    position: 'absolute',
    right: 15,
    bottom: 15,
  },
  priceShadow: {
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
  priceWrapper: {
    width: 335,
    height: 80,
    backgroundColor: COLORS.WHITE,
    paddingTop: 5,
    paddingLeft: 5,
    paddingBottom: 20,
    paddingRight: 10,
    borderRadius: 5,
  },
  priceSectionTitle: {
    ...font.size(20, 25).BOLD.DARK_GRAY,
  },
  price: {
    ...font.size(15, 20).REGULAR.NEUTRAL_GRAY,
  },
  priceAmountWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  proceedButton: {
    position: 'absolute',
    bottom: 30,
  },
  greenSignatureWrapper: {
    width: 174,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenText: {
    marginLeft: 10,
    ...font.size(12).REGULAR.GREEN,
  },
});

export default styles;
