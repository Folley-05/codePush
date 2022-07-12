import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/home/Home'
import NativeElements from '../screens/nativeElements/NativeElements'
import Kitten from '../screens/kitten/Kitten'
import Public from '../screens/public/Public'

const { Navigator, Screen }=createNativeStackNavigator()

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
                <Screen name="home" component={Home} />
                <Screen name="elements" component={NativeElements} />
                <Screen name="kitten" component={Kitten} />
                <Screen name="public" component={Public} />
            </Navigator>
        </NavigationContainer>
    )
}

export default Navigation
