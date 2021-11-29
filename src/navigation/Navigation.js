import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen }=createNativeStackNavigator()

const Ecran=()=>{
    return (
        <View>
            <Text>it's work fine !!! :)</Text>
        </View>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={
                    { 
                        headerShown: false,
                        contentStyle: { backgroundColor: '#fff' }
                    }
                }
            >
                <Screen name="home" component={Ecran} />
            </Navigator>
        </NavigationContainer>
    )
}

export default Navigation
