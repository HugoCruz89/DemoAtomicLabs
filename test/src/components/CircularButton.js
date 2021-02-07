import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {func} from 'prop-types';
const CircularButton = (props) => {
  const {onPress} = props;
  return (
    <View style={{marginVertical:15}}>
      <TouchableOpacity onPress={onPress} style={style.buttonStyle} />
      <Text style={style.text}>Quiero saber más</Text>
    </View>
  );
};
CircularButton.propTypes = {
  onPress: func,
};
const style = StyleSheet.create({
  buttonStyle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text: {
    paddingTop: '3%',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
});
export default CircularButton;
