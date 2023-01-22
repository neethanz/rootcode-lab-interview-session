import React from 'react';
import {View} from 'react-native';

const HorizontalSpacer = ({space}) => (
  <View
    style={
      space === 16
        ? styles.spacer16
        : space === 24
        ? styles.spacer24
        : space === 32
        ? styles.spacer32
        : styles.spacer8
    }
  />
);

const styles = {
  spacer8: {
    width: 8,
  },
  spacer16: {
    width: 16,
  },
  spacer24: {
    width: 24,
  },

  spacer32: {
    width: 32,
  },
};

export default HorizontalSpacer;
