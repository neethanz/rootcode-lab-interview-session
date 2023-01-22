import React from 'react';
import {View} from 'react-native';

const VerticalSpacer = ({space}) => (
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
    height: 8,
  },
  spacer16: {
    height: 16,
  },
  spacer24: {
    height: 24,
  },

  spacer32: {
    height: 32,
  },
};

export default VerticalSpacer;
