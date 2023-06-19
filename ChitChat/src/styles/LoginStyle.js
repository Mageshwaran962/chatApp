import {StyleSheet} from 'react-native';
import {colors} from './GlobalStyles';

export const loginStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary_background,
    marginHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10,
  },
  safeArae: {
    flex: 1,
    backgroundColor: colors.primary_background,
    justifyContent: 'flex-end',
  },
  safeFlex: {
    flex: 1,
    justifyContent: 'center',
  },
  text_style: {
    fontFamily: 'JosefinSans-Bold',
    fontSize: 30,
    color: colors.white,
  },
  image_style: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  row_style_logo: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical: 15,
  },
  input_style: {
    borderColor: colors.input_border,
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 25,
    marginVertical: 10,
    paddingLeft: 25,
    fontFamily: 'JosefinSans-Bold',
    color: colors.white,
    fontSize: 16,
  },
  bottom_row_style: {
    flexDirection: 'row',
    marginHorizontal: 25,
    marginVertical: 20,
  },
  bottom_text_style: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 15,
    color: colors.white,
  },
});
