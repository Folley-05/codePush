import React from 'react'
import * as eva from '@eva-design/eva'
import { StyleSheet, StatusBar } from 'react-native'
import { ApplicationProvider, IconRegistry, Text, Button, Layout,
    TopNavigation,TopNavigationAction, Divider,
    BottomNavigation, BottomNavigationTab } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {ThemeContext} from './theme-context'
import themeColors from './colors.json'
import { FeatherIconsPack } from './feather-icons'
import { BackIcon, MenuIcon, SunIcon, AppsIcon, GamesIcon, StartIcon, Arrow, } from './Icons'

const themes={
    light: {...eva.light, ...themeColors},
    dark: {...eva.dark, ...themeColors}
}

const { Navigator, Screen }=createBottomTabNavigator()

const Kitten = ({ navigation }) => {
    const [theme, setTheme]=React.useState('light')
    const toogleTheme=()=>{
        const nextTheme=theme==='light' ? 'dark' : 'light'
        setTheme(nextTheme)
    }
    const [botton, setBottom]=React.useState(0)

    const BackAction=()=><TopNavigationAction icon={BackIcon} onPress={()=>navigation.goBack()} />
    const LeftAction=()=>(
        <>
            <TopNavigationAction icon={MenuIcon} />
            <TopNavigationAction icon={SunIcon} onPress={()=>toogleTheme()} />
        </>
    )

    const Screen1=()=>(
        <Layout style={styles.layout}>
            <Text category="h2">App List</Text>
            <Button>Click</Button>
        </Layout>
    )
    const Screen2=()=>(
        <Layout style={styles.layout}>
            <Text category="h2">Game List</Text>
            <Button >Back</Button>
        </Layout>
    )
    const Screen3=()=>(
        <Layout style={styles.layout}>
            <Text category="h2">Favourites</Text>
            <Button >Back</Button>
        </Layout>
    )

    const BottonNav=({navigation, state})=>(
        <>
        <Divider style={styles.divider} />
        <BottomNavigation
            selectedIndex={state.index}
            // onSelect={index=>setBottom(index)}
            onSelect={index=>{navigation.navigate(state.routeNames[index])}}
        >
            <BottomNavigationTab title="APP" icon={AppsIcon} />
            <BottomNavigationTab title="GAMES" icon={GamesIcon} />
            <BottomNavigationTab title="FAVORIS" icon={StartIcon} />
        </BottomNavigation>
        </>
    )

    return (
        <>
        <StatusBar barStyle='ligth-content' backgroundColor="#FC5D28" animated={true} />
        <IconRegistry icons={[EvaIconsPack, FeatherIconsPack]} />
        <ThemeContext.Provider value={{theme, toogleTheme}}>
            <ApplicationProvider {...eva} theme={themes[theme]}>
                <TopNavigation
                    title={()=><Text category="h4">Eva Design</Text>} 
                    subtitle={()=><Text category="h6" status="primary" >Welcome</Text>} alignment="center"
                    accessoryLeft={BackAction}
                    accessoryRight={LeftAction}
                    style={styles.topNav}
                />
                <Divider style={styles.divider} />
                <Navigator tabBar={props=><BottonNav {...props} />} screenOptions={{ headerShown: false, }}>
                    <Screen name="APP" component={Screen1} />
                    <Screen name="GAMES" component={Screen2} />
                    <Screen name="FAVORIS" component={Screen3} />
                </Navigator>
            </ApplicationProvider>
        </ThemeContext.Provider>
        </>
    )
}

const styles=StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: 'center',
    },
    topNav: {
        minHeight: 60
    },
    divider: {
        height: 3,
    }
})

export default Kitten
