import {Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const SIZES = {
  wp: wp,
  hp: hp,
};

export const SIZE = value => {
  return wp(value / 4.2);
};

export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;
