import React from 'react'
import * as eva from '@eva-design/eva'  
import { ApplicationProvider, IconRegistry, Layout, Text, Button, Icon, TopNavigation, TopNavigationAction, Divider } from '@ui-kitten/components'
import themeColors from './colors.json'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

import { ThemeContext } from './theme-context'
import { FeatherIconsPack } from './feather-icons'


import { Arrow, FacebookIcon, BackIcon } from './Icons'

const themes={light: eva['light'], dark: {...eva.dark, ...themeColors}}


const Kitten = ({ navigation }) => {
    const themeConsumer=React.useContext(ThemeContext)

    const BackAction=()=><TopNavigationAction icon={BackIcon} onPress={()=>navigation.goBack()} />
    console.log(themeConsumer, navigation)
    return (
        <>
            <TopNavigation title="My Kitten App" alignment="center" accessoryLeft={BackAction} />
            <Divider />
            <Layout style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text category="h1">KITTEN</Text>
                <Button disabled accessoryLeft={FacebookIcon} accessoryRight={Arrow} >Click </Button>
            </Layout>
            <Divider />
            <Layout style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text category="h1">change theme</Text>
                <Button onPress={themeConsumer.toogleTheme} >{themeConsumer.theme}</Button>
            </Layout>
        </>
    )
}

const Themed=({navigation})=>{
    const [theme, setTheme]=React.useState('light')
    const toogleTheme=()=>{
        console.log("toogle theme start")
        const newTheme=theme==='light' ? 'dark' : 'light'
        setTheme(newTheme)
    }
    console.log("theme : ", theme)
    return (
        <>
            <IconRegistry icons={[EvaIconsPack, FeatherIconsPack]} />
            <ThemeContext.Provider value={{theme, toogleTheme}}>
                <ApplicationProvider {...eva} theme={themes[theme]}>
                    <Kitten navigation={navigation} />
                </ApplicationProvider>
            </ThemeContext.Provider>
        </>
    )

}

export default Themed
