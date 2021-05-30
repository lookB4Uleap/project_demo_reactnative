import React from 'react'
import { View, Text, Button } from 'react-native'
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import {createStackNavigator} from '@react-navigation/stack'; 
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen'

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeStackScreen = ({navigation}) => {
    return(
      <HomeStack.Navigator screenOptions={{
        headerStyle : {
          backgroundColor: '#3377ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
          <HomeStack.Screen name="Home" component={HomeScreen} 
            options = {{
              // title: 'Home',
              headerLeft: () => (
                <Icon.Button name='ios-menu' size={25}
                backgroundColor='#3377ff'
                onPress = {() => {navigation.openDrawer()}}></Icon.Button>
              )
            }}
          />
              
      </HomeStack.Navigator>
    ); 
  }
  
  const DetailsStackScreen = ({navigation}) => {
    return(
      <DetailsStack.Navigator screenOptions={{
        headerStyle : {
          backgroundColor: '#4d88ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
          <DetailsStack.Screen name="Details" component={DetailsScreen} 
            options = {{
              headerLeft: () => (
                <Icon.Button name='ios-menu' size={25}
                backgroundColor='#4d88ff'
                onPress = {() => {navigation.openDrawer()}}></Icon.Button>
              )
            }}
          />
              
      </DetailsStack.Navigator>
    ); 
  }
  
const MainTabScreen = () => {
    return (
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="white"
          barStyle={{ backgroundColor: 'tomato' }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarColor: '#3377ff',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Details"
            component={DetailsStackScreen}
            options={{
              tabBarLabel: 'Details',
              tabBarColor: '#4d88ff',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-notifications" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarColor: '#6699ff',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-person" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
              tabBarLabel: 'Explore',
              tabBarColor: '#80aaff',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-aperture" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      );
}

export default MainTabScreen;