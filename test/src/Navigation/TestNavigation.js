import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Intro from './../screens/intro';
import FormData from './../screens/FormData';
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
      <Stack.Navigator initialRouteName="intro">
        <Stack.Screen
          name="intro"
          component={Intro}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="formData"
          component={FormData}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default TestNavigation;
