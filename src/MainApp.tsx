import React, { useEffect } from "react";
import { Provider as PaperProvider } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import i18n from './modules/i18n';
import SplashScreen from './screens/SplashScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import { SettingsScreen } from './screens/SettingsScreen';

export default function MainApp() {
  const fullScreenOptions = {
    headerShown: false,
  }

  const Stack = createNativeStackNavigator();

  useEffect(() => {
    i18n.changeLanguage();
  }, []);

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Group>
            <Stack.Screen name="Splash" component={SplashScreen} options={fullScreenOptions}/>
            <Stack.Screen name="Home" component={HomeScreen} options={fullScreenOptions}/>
            <Stack.Screen name="Game" component={GameScreen} options={fullScreenOptions}/>
            <Stack.Screen name="Settings" component={SettingsScreen}/>
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
