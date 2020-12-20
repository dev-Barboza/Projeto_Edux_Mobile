import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5 } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FirebaseAppProvider} from 'reactfire';
import firebaseConfig from './utils/firebaseConfig';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";



const Stack = createStackNavigator();


const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './pages/login';
import Ranking from './pages/Ranking';
import Objetivos from './pages/Objetivos';
import Turmas from './pages/Turmas';
import Timeline from './pages/Timeline';

const Hidden = () => {
  return null;
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Início') {
            iconName = 'school';
          } else if (route.name === 'Objetivos') {
            iconName = 'graduation-cap';
          }
          else if (route.name === 'Turmas') {
            iconName = 'chalkboard-teacher';
          }

          // You can return any component that you like here!
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: '#00B751',
        inactiveBackgroundColor: '#00D65F',
        activeTintColor: '#fff',
        inactiveTintColor: '#fff',
        labelStyle: {
          fontSize: 11,
          fontWeight: 'bold',
          margin: 0,
          padding: 0,
        },
      }
      }>
      <Tab.Screen name="Início" component={Ranking} />

      <Tab.Screen name="Turmas" component={Turmas} />

      <Tab.Screen name="Objetivos" component={Objetivos} />

    </Tab.Navigator>

  )
}

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Drawer.Navigator>     
        <Drawer.Screen name="Login" component={Login} options={{ headerShown: false, drawerLabel: Hidden }} />
        <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ drawerLabel: "Ranking" }} />
       


      </Drawer.Navigator>
    </NavigationContainer >



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
