import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const SIZES = {
  wp: wp,
  hp: hp,
  width: width,
  height: height,
};

// commanSize
export const SIZE = value => {
  return wp(value / 4.2);
};
