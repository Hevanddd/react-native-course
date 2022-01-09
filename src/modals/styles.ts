import {COLORS} from './../styles/colors';
import {StyleSheet} from 'react-native';
import {font} from '../styles/font';

const styles = StyleSheet.create({
  modalWrapper: {
    backgroundColor: COLORS.NEUTRAL_GRAY2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: COLORS.WHITE,
    width: 335,
    marginHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    paddingBottom: 30,
  },
  modalTitle: {
    ...font.size(20, 25).BOLD.DARK_GRAY,
    marginTop: 14.5,
  },
  modalDescription: {
    ...font.size(15, 20).REGULAR.DARK_GRAY,
    marginTop: 10,
    width: 190,
  },
  modalButton: {
    backgroundColor: COLORS.BLUE,
    width: 125,
    marginTop: 25,
  },
  buttonsWrapper: {
    marginHorizontal: 33,
    width: 270,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderConfirmationWrapper: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
    alignItems: 'center',
  },
  orderConfirmationTitle: {
    marginTop: 80,
    marginBottom: 40,
    width: 244,
    textAlign: 'center',
    ...font.size(40, 50).BOLD.BLUE_LIGHT,
  },
  orderConfirmationSubtitle: {
    marginTop: 35,
    width: 300,
    textAlign: 'center',
    ...font.size(20, 25).BOLD.DARK_GRAY,
  },
  orderConfirmationDescription: {
    marginTop: 10,
    width: 250,
    textAlign: 'center',
    ...font.size(15, 20).REGULAR.DARK_GRAY,
  },
  orderConfirmationButton: {
    backgroundColor: COLORS.BLUE,
    width: 335,
    marginTop: 35,
  },
});

export default styles;
