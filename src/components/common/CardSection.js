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
    backgroundColor: '#E1F2E6',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#B3E3BC',
    position: 'relative'
  }
};

export { CardSection };
