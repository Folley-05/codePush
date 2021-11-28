import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import codePush from 'react-native-code-push'

const App = () => {
  return (
    <View style={styles.app}>
      <Text style={styles.text}>Super App Root</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default codePush(App)
