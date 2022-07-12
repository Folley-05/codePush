import React from 'react'
import { View, StyleSheet, Image, StatusBar } from 'react-native'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry, Layout, Button, Text, } from '@ui-kitten/components'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Stock from './Stock'
import theme from './assets/colors.json'

const { Navigator, Screen }=createNativeStackNavigator()


const Public = ({navigation}) => {
    console.log("public props ", navigation)
    return (
            <Layout style={{flex: 1}}>
                <Layout style={styles.first}>
                    <Image source={require('./assets/background.jpg')}  />
                </Layout>
                <Layout style={styles.second} >
                    <Layout style={{flexDirection: "row"}}>
                        <Image source={require('../../assets/public.png')} style={{width: 40, height: 40}} />
                        <Text category="h4" style={{fontWeight: 'bold'}} >Public</Text>
                    </Layout>
                    <Text category="h1" style={{fontWeight: 'bold'}} >Invest in Stocks.</Text>
                    <Text category="h1" >Build your portfolio.</Text>
                    <Button style={styles.button} onPress={()=>navigation.navigate("stock")}
                    >Get Started</Button>
                    <Button style={styles.button} appearance="outline" >I have a code</Button>
                </Layout>
            </Layout>
    )
}

const Nav=()=>{
    return (
        <ApplicationProvider {...eva} theme={{...eva.light, ...theme}} >
            <StatusBar barStyle='dark-content' backgroundColor="#ffffff1a" animated={true} />
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="public" component={Public} />
                <Screen name="stock" component={Stock} />
            </Navigator>
        </ApplicationProvider>
    )

}

const styles=StyleSheet.create({
    first: {
        flex: 3,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    second: {
        padding: 20,
        flex: 2,
    },
    image: {
        flex: 1,
    },
    button: {
        marginTop: 15,
        borderRadius: 20,
        borderWidth: 0,
        fontSize: 20,
    },
})

export default Nav
