import 'react-native-gesture-handler'
import {NavigationContainer, DarkTheme as NaviDarkTheme, DefaultTheme as NaviDefaultTheme} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, Alert } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'; 
import { createDrawerNavigator } from '@react-navigation/drawer'; 
//import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen'; 
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ExploreScreen from './screens/ExploreScreen';
import ProfileScreen from './screens/ProfileScreen';
import MainTabScreen from './screens/MainTabScreen';
import DrawerContent from './screens/DrawerContent';
import SupportScreen from './screens/SupportScreen';
import {AuthContext} from './components/context';
import RootStackScreen from './screens/RootStackScreen';
import { AsyncStorage } from '@react-native-community/async-storage';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// const HomeStackScreen = ({navigation}) => {
//   return(
//     <HomeStack.Navigator screenOptions={{
//       headerStyle : {
//         backgroundColor: 'red',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold'
//       }
//     }}>
//         <HomeStack.Screen name="Home" component={HomeScreen} 
//           options = {{
//             // title: 'Home',
//             headerLeft: () => (
//               <Icon.Button name='ios-menu' size={25}
//               backgroundColor='red'
//               onPress = {() => {navigation.openDrawer()}}></Icon.Button>
//             )
//           }}
//         />
            
//     </HomeStack.Navigator>
//   ); 
// }

// const DetailsStackScreen = ({navigation}) => {
//   return(
//     <DetailsStack.Navigator screenOptions={{
//       headerStyle : {
//         backgroundColor: 'red',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold'
//       }
//     }}>
//         <DetailsStack.Screen name="Details" component={DetailsScreen} 
//           options = {{
//             headerLeft: () => (
//               <Icon.Button name='ios-menu' size={25}
//               backgroundColor='red'
//               onPress = {() => {navigation.openDrawer()}}></Icon.Button>
//             )
//           }}
//         />
            
//     </DetailsStack.Navigator>
//   ); 
// }


// const Home = ({navigation}) => {
//   return (
//     <View style={styles.container}>
//       <Text>Home Screen</Text>
//       <Button title="Go to Details Screen"
//         onPress={() => navigation.navigate("Details")}
//       />
//     </View>
//   );
// }

// const Details = ({navigation}) => {
//   return (
//     <View style={styles.container}>
//       <Text>Details Screen</Text>
//       <Button title="Go to Details Screen ... Again"
//         onPress={() => navigation.push("Details")}
//         style={{alignContent: 'space-between'}}
//       />
//       <Button title="Go to Home Screen"
//         onPress={() => navigation.navigate("Home")}
//         style={{alignContent: 'space-between'}}
//       />
      
//       <Button title="Go to Back"
//         onPress={() => navigation.goBack()}
//         style={{alignContent: 'space-between'}}
//       />

//       <Button title="Go to First Screen"
//         onPress={() => navigation.popToTop()}
//         style={{alignContent: 'space-between'}}
//       />
//     </View>
//   );
// }

export default function App() {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: true
  };

  const CustomDefaultTheme = {
    ...NaviDefaultTheme,
    ...PaperDefaultTheme,
    color: {
      ...NaviDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333',
    }
  } 

  const CustomDarkTheme = {
    ...NaviDarkTheme,
    ...PaperDarkTheme,
    color: {
      ...NaviDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: 'black',
      text: '#ffffff',
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState, action) => {
    switch(action.type) {
      case 'RETRIVE_TOKEN' : return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
      case 'LOGIN' : return {
        ...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading: false
      };
      case 'LOGOUT' : return {
        ...prevState,
        userName: null,
        userToken: null,
        isLoading: false

      };
      case 'REGISTER' : return {
        userName: action.id,
        userToken: action.token,
        isLoading: false
      };

    }
  };

  const [LoginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      // setUserToken('a1');
      // setIsLoading(false);
      // let userToken;
      // userToken = null;
      // if (userName == 'anish' && password == '12345') {
        const userToken = String(foundUser[0].userToken);
        const userName = foundUser[0].userName;
        
        try {
          await AsyncStorage.setItem('userToken', userToken);
        }
        catch(e) {
          console.log(e);
        }
        
      
      // else 
      //   Alert.alert('Invalid User');
      dispatch({type: 'LOGIN', id: userName, token: userToken});      
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userItem');
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'LOGOUT'});
    },
    signUp: () => {
      // setUserToken('a1');
      // setIsLoading(false);
    }, 
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme);
    }
  }),[]);

 
  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'REGISTER',  token: userToken});
    }, 1000);
    
  }, []);

  if (LoginState.isLoading) {
    return(
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <PaperProvider theme={theme}>
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={theme}>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        
      </Stack.Navigator> */}
      
      {/* {LoginState.userToken != null ? ( */}
      {true ? (
        <Drawer.Navigator drawerContent = {props => <DrawerContent {...props} DarkTheme={isDarkTheme}/>}> 
        {/* <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} /> */}
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name='SupportScreen' component={SupportScreen} />        
        </Drawer.Navigator>
      ) : 
      <RootStackScreen />

       }
      
      

      

      </NavigationContainer>
    </AuthContext.Provider>
    </PaperProvider>
  );
}

