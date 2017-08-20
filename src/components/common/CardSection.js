import React from 'react';
import { View } from 'react-native';

const CardSection = props =>
  <View style={styles.containerStyle}>
    {props.children}
  </View>;

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#E9ECF5',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#C2D1F0',
    position: 'relative'
  }
};

export { CardSection };
