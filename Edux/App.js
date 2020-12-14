import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

import Login from './pages/login';
import Ranking from './pages/Ranking';

const Logout = ({navigation}) => { 
  return(
    <View>
      <Text>Deseja Realmente Sair da Aplicação ?</Text>
      <Button title= 'sair' onPress={() => {
        AsyncStorage.removeItem('@jwt');
        navigation.push('Login')
    }}>
        
      </Button>
    </View>
  )
}

const Autenticado = () => {
  return(
    
      <Drawer.Navigator initialRouteName="Ranking">
        <Drawer.Screen name="Ranking" component={Ranking} />
        <Drawer.Screen name="Logout" component={Logout} />
      </Drawer.Navigator>
  
  )
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown : false}} >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Autenticado" component={Autenticado} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
