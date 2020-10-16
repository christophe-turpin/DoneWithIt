import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ViewImageScreen from './app/screens/ViewImageScreen'
import WelcomeScreen from './app/screens/WelcomeScreen';
import AuthService from './services/auth.service'

const Tab = createBottomTabNavigator();

export default function App() {
  const [ currentUser, setCurrentUser ] = useState(undefined);
  
  useEffect(() => {
		const user = AuthService.getCurrentUser();

		if (user) {
			setCurrentUser(user);
		}
  }, []);
  
  return currentUser ? (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={ViewImageScreen} user={currentUser}/>
      </Tab.Navigator>
    </NavigationContainer>) : 
    (<WelcomeScreen />)
  
}