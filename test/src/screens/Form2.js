import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TextInput} from 'components';
import Colors from './../constants/Colors';
const Form2 = (props) => {
  return (
    <View style={{height: '75%'}}>
      <View style={{marginHorizontal: 50}}>
        <View style={styles.Header}>
          <View style={{width: 80, marginTop: 20}}>
            <Image
              style={styles.Numbers}
              source={require('./../assets/Images/Group4023.png')}
            />
          </View>
          <Text style={styles.text}>
            VALIDA TU
            <Text style={styles.TextRed(Colors.primary)}>{'\n'}CELULAR</Text>
          </Text>
        </View>
      </View>
      <View style={{marginHorizontal: 20, marginTop: 15}}>
        <Text style={styles.TextDescription}>
          Queremos saber que eres tu , por favor ingresa los siguientes datos:
        </Text>
        <View style={{marginVertical: 30}}>
          <Text style={styles.TextDescription}>Nombres (s)</Text>
          <TextInput
            value={props.name}
            onChangeText={(text) => props.onChangeName(text)}
          />
          <Text style={styles.TextDescription}>Apellidos</Text>
          <TextInput
            value={props.secondName}
            onChangeText={(text) => props.onChangeSecondName(text)}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  Numbers: {
    width: 40,
    height: 40,
  },
  TextRed: (color) => ({
    color: color,
  }),
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: 'transparent',
  },
  TextDescription: {
    color: 'white',
    fontSize: 20,

    textAlign: 'left',
    backgroundColor: 'transparent',
  },
});
export default Form2;
