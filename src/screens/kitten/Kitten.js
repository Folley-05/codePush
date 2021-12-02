import React from 'react'
import * as eva from '@eva-design/eva'
import { StyleSheet } from 'react-native'
import { ApplicationProvider, IconRegistry, Text, Button, Layout,
    TopNavigation,TopNavigationAction, Divider,
    BottomNavigation, BottomNavigationTab } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

import {ThemeContext} from './theme-context'
import themeColors from './colors.json'
import { FeatherIconsPack } from './feather-icons'
import { BackIcon, MenuIcon, SunIcon, AppsIcon, GamesIcon, StartIcon, Arrow, } from './Icons'

const themes={
    light: {...eva.light, ...themeColors},
    dark: {...eva.dark, ...themeColors}
}

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
        </>)

        console.log(AppsIcon)
    return (
        <>
        <IconRegistry icons={[EvaIconsPack, FeatherIconsPack]} />
        <ThemeContext.Provider value={{theme, toogleTheme}}>
            <ApplicationProvider {...eva} theme={themes[theme]}>
                <TopNavigation
                    title={()=><Text category="h4">Eva Design</Text>} 
                    subtitle={()=><Text category="h6" status="primary" >Welcome</Text>} alignment="center"
                    accessoryLeft={BackAction}
                    accessoryRight={LeftAction}
                    appearance="control"
                    style={styles.topNav}
                />
                <Divider style={styles.divider} />
                <Layout style={styles.layout}>
                    
                    <Text category="h2">Hello from</Text>
                    <Button>Click</Button>
                </Layout>
                <Divider style={styles.divider} />
                <BottomNavigation
                    selectedIndex={botton}
                    onSelect={index=>setBottom(index)}
                >
                    <BottomNavigationTab title="APP" icon={AppsIcon} />
                    <BottomNavigationTab title="GAMES" icon={GamesIcon} />
                    <BottomNavigationTab title="FAVORIS" icon={StartIcon} />
                </BottomNavigation>
            </ApplicationProvider>
        </ThemeContext.Provider>
        </>
    )
}

const styles=StyleSheet.create({
    layout: {
        flex: 1,
    },
    topNav: {
        minHeight: 60
    },
    divider: {
        height: 3,
    }
})

export default Kitten
