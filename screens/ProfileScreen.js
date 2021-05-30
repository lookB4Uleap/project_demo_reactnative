import React from 'react'
import { View, Text, Button } from 'react-native'

export default function ProfileScreen() {
    return (
        
        <View style={{
            flex:1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            
          }}>
            <Text>User Profile</Text>
            <Button title="SIGN IN"
                onPress={() => alert('Button Clicked')}
            />
            <Button title="SIGN UP"
                onPress={() => alert('Button Clicked')}
            />
        </View>

    )
}
