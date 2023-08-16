import {StyleSheet} from 'react-native';
import {colors} from './GlobalStyles';

export const avatarPageStyle = StyleSheet.create({
  container: {
    backgroundColor: colors.primary_background,
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: 'JosefinSans-Bold',
    color: colors.white,
    alignSelf: 'center',
    fontSize: 20,
  },
  avatarBoder: {
    borderColor: colors.border_color_selected,
    borderWidth: 2,
    borderRadius: 100,
    padding: 4,
  },
  rowStyle: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  loaderStyle: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  safe: {
    flex: 1,
    backgroundColor: colors.primary_background,
    justifyContent: 'center',
  },
});
