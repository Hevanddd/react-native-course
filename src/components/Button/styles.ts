import {StyleSheet} from 'react-native';
import {font} from '../../styles/font';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  title: {
    ...font.size(15, 16).MEDIUM.WHITE,
    textTransform: 'uppercase',
  },
});

export default styles;
