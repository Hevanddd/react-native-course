import {COLORS} from './styles/colors';
import {StyleSheet} from 'react-native';
import {font} from './styles/font';

const styles = StyleSheet.create({
  rightHeaderIcons: {
    width: 75,
    height: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  drawerTitle: {
    ...font.size(40, 50).BOLD.BLUE,
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 70,
  },
  drawerSectionTitle: {
    ...font.size(20, 25).BOLD.DARK_GRAY,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  drawerItem: {
    paddingVertical: 0,
    marginVertical: 0,
  },
  drawerItemText: {
    ...font.size(15, 20).REGULAR.NEUTRAL_GRAY,
    marginLeft: -15,
  },
  drawerSeparator: {
    height: 1,
    width: '100%',
    backgroundColor: COLORS.LIGHT_GRAY,
    marginTop: 10,
    marginBottom: 15,
  },
});

export default styles;
