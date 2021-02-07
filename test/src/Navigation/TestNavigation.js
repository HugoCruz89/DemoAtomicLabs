import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import intro from './../screens/intro';
import Colors from '../constants/Colors';
import {Platform} from 'react-native';
const Stack = createStackNavigator();
function TestNavigation(props) {
  return (
    <NavigationContainer
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
        },
      }}>
      <Stack.Navigator>
        <Stack.Screen name="intro" component={intro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default TestNavigation;
