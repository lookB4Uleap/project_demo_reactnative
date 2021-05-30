import React from 'react'
import { View, Text, StyleSheet,
    TouchableOpacity, 
    TextInput,
    Platform,
    StatusBar,
    Alert} from 'react-native'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../components/context';
import Users from '../Users';

export default function SignInScreen({navigation}) {
    
    const [data, setData] = React.useState({
        username:'',
        password:'',
        check_textInputChange: false,
        secureTextEntry: true
    });

    const textInputChange = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        }
        else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    } 

    const handelPassword = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const {signIn} = React.useContext(AuthContext);

    const loginHandler = (username, password) => {
        // signIn(username, password);
        const foundUser = Users.filter(user => {
            return user.username == username && user.password == password;
        });

        if (data.username.length == 0 || data.password.length == 0) {
            Alert.alert("Wrong Input!!", "Username or Password cannot be empty", [{text: 'Okay'}]);
            return ;
        }

        if (foundUser.length == 0) {
            Alert.alert("Invalid User!!", "Username or Password is incorrect", [{text: 'Okay'}]);
            return ;
        }
        signIn(foundUser);
    }



    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='green' barStyle='light-content' /> 
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Username</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="user-o"
                        color="red"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Your Username"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText = {(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ?
                    // <Animation.View animation="bounceIn"> 

                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    /> 
                    : null}
                </View>
                <Text style={styles.text_footer}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="lock"
                        color="red"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Your Password"
                        style={styles.textInput}
                        autoCapitalize="none"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText = {(val) => handelPassword(val)}
                    />
                    
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}

                    /> :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}

                    />

                        }
                    </TouchableOpacity>

                </View>

                <View style={styles.button}>
                        <TouchableOpacity style={styles.signIn} onPress={() => {loginHandler(data.username,data.password)}}>
                            <Text
                                style={[styles.textSign, {color:'white'}]}
                            >
                                Sign In
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}
                            style={[styles.signIn, {
                                borderBottomColor: 'orange',
                                borderWidth: 1,
                                marginTop: 15,
                                backgroundColor: 'white'
                             }
                        ]}
                        >
                            <Text style={[styles.textSign, {color:'orange'}]}>Sign Up</Text>
                        </TouchableOpacity>
                </View>

                <View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'green'
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });