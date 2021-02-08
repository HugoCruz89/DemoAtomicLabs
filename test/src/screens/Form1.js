import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Form1 = () => {
  return (
    <View style={styles.Header}>
      <View>
        <Image
          style={styles.Numbers}
          source={require('./../assets/Images/Group4015.png')}
        />
      </View>
      <Text style={styles.text}>
        TE QUEREMOS <Text style={styles.TextRed}>CONOCER</Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    marginVertical: 30,
  },
  Numbers: {
    width: 40,
    height: 40,
  },
  TextRed: {
    color: 'red',
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: 'transparent',
  },
});
export default Form1;
