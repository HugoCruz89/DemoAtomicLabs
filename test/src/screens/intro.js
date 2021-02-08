import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import Background from './Background';
import CircularButton from './../components/CircularButton';
import Button from './../components/Button.js';

var {width, height} = Dimensions.get('window');
const Intro = (props) => {
  return (
    <Background>
      <Text style={styles.text}>
        Desarrolla todo {'\n'} <Text style={styles.TextRed}>tu POTENCIAL</Text>{' '}
        dentro del equipo <Text style={styles.TextRed}>ATOMIC</Text>LABS
      </Text>
      <CircularButton />
      <View>
        <Image
          style={styles.Logo(width, height)}
          source={require('./../assets/Images/Group4032.png')}
        />
      </View>
      <View
        style={{
          marginHorizontal: width * 0.25,
          marginVertical: height * 0.03,
          borderRadius: 30,
        }}>
        <Button
          theme="tertiary"
          title="¡Quiero ser parte!"
          onPress={() => {
            props.navigation.navigate('formData', {
              ID: '',
            });
          }}
        />
      </View>
    </Background>
  );
};
const styles = StyleSheet.create({
  Logo: (width, height) => ({
    width: width * 0.85,
    height: height * 0.48,
    resizeMode: 'stretch',
  }),

  TextRed: {
    color: 'red',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'transparent',
    marginHorizontal: 15,
  },
});
export default Intro;
