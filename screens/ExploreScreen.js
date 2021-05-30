import React from 'react'
import { View, Text, Button } from 'react-native'

export default function ExploreScreen() {
    return (
    
            <View style={{
                flex:1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                
              }}>
                <Button title="Explore"
                    onPress={() => alert('Button Clicked')}
                />
            </View>
        
    )
}
