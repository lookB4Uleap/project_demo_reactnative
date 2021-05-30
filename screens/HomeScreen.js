import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function HomeScreen({navigation}) {
    return (
        <View style={{
            flex:1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            
          }}>
            <Text>Home Screen</Text>
            <Button title="Go to Details Screen"
                onPress={() => navigation.navigate("Details")}
            />
        </View>
    );
}
