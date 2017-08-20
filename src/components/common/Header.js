// Import libraries for making component
import React from 'react';
import { View, Text } from 'react-native';

const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        {props.headerText}
      </Text>
    </View>
  );
};

const colors = {
  bgblue: '#4B70BF',
  fontwhite: '#F2F7FC',
  shadow: '#1E376E'
};

const styles = {
  viewStyle: {
    backgroundColor: colors.bgblue,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    paddingTop: 16,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.6,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.fontwhite
  }
};

export { Header };
