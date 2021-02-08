import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Background = (props) => {
  const insets = useSafeAreaInsets();
  const {children} = props;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./../assets/Images/MaskGroup1.png')}
        style={styles.image}>
        <View style={styles.containerResponsive(insets)}>{children}</View>
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
    height: height * 0.48,
    resizeMode: 'stretch',
  }),
});
export default Background;
