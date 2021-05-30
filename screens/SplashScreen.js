import React from 'react'
import { View, Text, Button, StyleSheet,
        TouchableOpacity, Dimensions,
        StatusBar, Image } from 'react-native';
import SignInScreen from './SignInScreen';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

export default function SplashScreen({navigation}) {
    return (
        <View style={styles.container}>
            {/* <Text>SplashScreen</Text>
            <Button title="Click Here" onPress={()=> alert('Button Clicked')} /> */}
            <View style={styles.header}>
                {/* <Text>Header</Text> */}
                
                <Image
                    animation="bounceIn"
                    duration="1500"
                    source={require('/home/anish/Dev/Apps/demo_app/assets/icon.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <View style={styles.footer}>
                {/* <Text>Footer</Text> */}
                <Text style={styles.title}>Stay Connected</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")} style={styles.buttonTouch}>
                    {/* <LinearGradient
                        colors={['red','blue']}
                        style={styles.signIn}
                    > */}
                    <Text style={styles.textSign}>Get Started</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                    {/* </LinearGradient> */}
                </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

const {height} = Dimensions.get("screen"); //screen height
const height_logo = height * 0.28; // logo height 28% of actual screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387',
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    buttonTouch: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        // justifyContent: "flex-start"
      },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});