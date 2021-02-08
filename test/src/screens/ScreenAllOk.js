import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from 'react-native';
import {TextInput} from 'components';
import Colors from './../constants/Colors';
var {width, height} = Dimensions.get('window');
const ScreenAllOk = (props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={{flex: 1}}>
        <View style={{marginHorizontal: 50}}>
          <View style={styles.Header}>
            <Text style={styles.text}>
              TUS DATOS{'\n'}HAN SIDO
              <Text style={styles.TextRed(Colors.primary)}>
                {' '}
                ENVIADOS CON ÉXITO
              </Text>
            </Text>
          </View>
        </View>
        <View style={{marginHorizontal: 20, marginTop: 15}}>
          <Text style={styles.TextDescription}>
            En breve recibirás un correo de confirmación por parte del equipo de
            AtomicsLabs.
          </Text>
          <Text style={styles.TextDescription}>
            Recuerda revizar tu bandeja de SPAM ¡Esperamos verte pronto!.
          </Text>
          <View style={{marginVertical: 30}}>
            <View>
              <Image
                style={styles.Logo(width, height)}
                source={require('./../assets/Images/Group4039.png')}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  Logo: (width, height) => ({
    width: width * 0.85,
    height: height * 0.4,
    resizeMode: 'stretch',
  }),
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
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  TextDescription: {
    color: 'white',
    fontSize: 20,

    textAlign: 'left',
    backgroundColor: 'transparent',
  },
});
export default ScreenAllOk;
