import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import codePush from 'react-native-code-push'
import AppRoot from './src/AppRoot.js'

const App = () => {
  return (
      <SafeAreaView style={styles.app}>
        <AppRoot />
      </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  app: {
    flex: 1
  }
})

export default codePush(App)
