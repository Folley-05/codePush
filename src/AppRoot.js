import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Navigation from './navigation/Navigation'

const AppRoot = () => {
    return (
        <View style={styles.appRoot}>
            <Navigation />
        </View>
    )
}

const styles=StyleSheet.create({
    appRoot: {
        flex: 1,
    }
})

export default AppRoot
