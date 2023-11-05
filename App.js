import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import OnboardScreen from './screens/OnboardScreen';
import PhoneScreen from './screens/PhoneScreen';
import CodeScreen from './screens/CodeScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Onboard"
    screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Onboard" component={OnboardScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen}/>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Phone" component={PhoneScreen}  />
      <Stack.Screen name="Code" component={CodeScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;