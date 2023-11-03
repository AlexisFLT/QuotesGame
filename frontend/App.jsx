import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as font from 'expo-font';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import * as splashscreen from 'expo-splash-screen';
import { Dorsa_400Regular } from '@expo-google-fonts/dev';

import HomeView from './src/view/HomeView';
import MainMenu from './src/view/MainMenu';


export default function app() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await splashscreen.preventAutoHideAsync();
        await font.loadAsync({ Dorsa_400Regular });
      }
      catch {
        // handle error
      }
      finally {
        setAppIsReady(true);
      }
    })();
  }, []);

  const onLayout = useCallback(() => {
    if (appIsReady) {
      splashscreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }


const Stack = createStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">{props => <HomeView {...props} onLayout={onLayout}/>}</Stack.Screen>
      {/* <HomeView onLayout={onLayout}/> */}
        <Stack.Screen name="Menu" component={MainMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});