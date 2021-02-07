import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Button,
  Dimensions,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CircularButton from './../components/CircularButton';
var {width, height} = Dimensions.get('window');
const Intro = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./../assets/Images/MaskGroup1.png')}
        style={styles.image}>
        <View style={styles.containerResponsive(insets)}>
          <Text style={styles.text}>
            Desarrolla todo {'\n'}{' '}
            <Text style={styles.TextRed}>tu POTENCIAL</Text> dentro del equipo{' '}
            <Text style={styles.TextRed}>ATOMIC</Text>LABS
          </Text>
          <CircularButton />
          <View>
            <Image
              style={styles.Logo(width, height)}
              source={require('./../assets/Images/Group4032.png')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  containerResponsive: (insets) => ({
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    flex: 1,
    alignItems: 'center',
  }),
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
  },
  Logo: (width, height) => ({
    width: width * 0.85,
    height: height * 0.5,
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
