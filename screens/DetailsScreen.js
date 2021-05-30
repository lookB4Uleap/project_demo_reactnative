import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function DetailsScreen({navigation}) {
    return (
            <View style={{
                flex:1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                
              }}>
              <Text>Details Screen</Text>
              {/* <Button title="Go to Details Screen ... Again"
                onPress={() => navigation.push("Details")}
                
              /> */}
              <Button title="Go to Home Screen"
                onPress={() => navigation.navigate("Home")}
                
              />
              
              <Button title="Go to Back"
                onPress={() => navigation.goBack()}
                
              />
        
              {/* <Button title="Go to First Screen"
                onPress={() => navigation.popToTop()}
              /> */}
            </View>
    );
}
