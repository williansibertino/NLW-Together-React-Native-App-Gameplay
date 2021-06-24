import React from 'react';
import AppLoading from 'expo-app-loading';

import { StatusBar } from 'react-native';

import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani';

import { Home } from './src/screens/home';
import { Background } from './src/components/background';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading /> // Não inicia o app enquanto não carregar o telefone.
  }
  
  return(
    <Background>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      /> 

      <Home />
    </Background>
  ); 
}