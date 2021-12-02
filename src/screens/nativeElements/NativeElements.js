import React from 'react'
import { View, Text } from 'react-native'
import { ThemeProvider, Button } from 'react-native-elements'

const NativeElements = () => {
    return (
        <ThemeProvider theme={theme} useDark={true} >
            <Button title="Hey!" />
        </ThemeProvider>
    )
}

const theme={
    Button: {
        titleStyle: {
            color: 'red',
            fontSize: 25
        }
    }
}

export default NativeElements
