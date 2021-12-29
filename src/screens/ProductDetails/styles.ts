import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors';
import {font} from '../../styles/font';

const styles = StyleSheet.create({
  detailsWrapper: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  productTitle: {
    ...font.size(15, 20).REGULAR.NEUTRAL_GRAY,
  },
  productPrice: {
    marginTop: 15,
    ...font.size(15).BOLD.NEUTRAL_GRAY,
  },
  productDetailsWrapper: {
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LIGHT_GRAY,
  },
  productColorsWrapper: {
    marginTop: 10,
    height: 90,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LIGHT_GRAY,
  },
  colorSectionHeader: {
    marginTop: 5,
    ...font.size(20, 25).BOLD.NEUTRAL_GRAY,
  },
  colorWrapper: {
    marginTop: 10,
  },
  color: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: COLORS.NEUTRAL_GRAY1,
    alignSelf: 'flex-start',
    marginRight: 10,
  },
  descriptionSectionHeader: {
    marginTop: 15,
    ...font.size(20, 25).BOLD.NEUTRAL_GRAY,
  },
  description: {
    marginTop: 10,
    ...font.size(15, 20).REGULAR.NEUTRAL_GRAY,
  },
  button: {
    marginHorizontal: 20,
    width: '90%',
    backgroundColor: COLORS.BLUE,
    position: 'absolute',
  },
});

export default styles;
