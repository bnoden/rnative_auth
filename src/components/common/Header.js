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
  bggreen: '#4BBF70',
  fontwhite: '#F2F7FC',
  headershade: '#1E376E'
};
const { bggreen, fontwhite, headershade } = colors;

const styles = {
  viewStyle: {
    backgroundColor: bggreen,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    paddingTop: 16,
    shadowColor: headershade,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.6,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: fontwhite
  }
};

export { Header };
