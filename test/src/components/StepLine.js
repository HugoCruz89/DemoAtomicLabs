import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

const widthTotal = Dimensions.get('window').width / 1.2;
const widthSection = widthTotal / 2;

const StepLine = (props) => {
  const widthLine = widthSection * props.step;

  return (
    <View style={styles.Container}>
      <View style={styles.separatorStyleBackground(widthTotal)}>
        <View style={styles.separatorStyle(widthLine)} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  separatorStyle: (widthLine) => ({
    borderBottomColor: '#FC3838',
    borderBottomWidth: 10,
    width: widthLine,
    borderRadius: 4,
    position: 'absolute',
  }),
  separatorStyleBackground: (_widthTotal) => ({
    borderBottomColor: '#DADADA',
    borderBottomWidth: 10,
    width: _widthTotal,
    borderRadius: 4,
  }),
});
export default StepLine;
