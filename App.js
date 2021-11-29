import React from 'react'
import { View, StyleSheet } from 'react-native'
import codePush from 'react-native-code-push'
import AppRoot from './src/AppRoot.js'

const App = () => {
  return (
    <View style={styles.app}>
      <AppRoot />
    </View>
  )
}

const styles=StyleSheet.create({
  app: {
    flex: 1
  }
})

export default codePush(App)
