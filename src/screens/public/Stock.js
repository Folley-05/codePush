import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Button, Text, Layout } from '@ui-kitten/components'

const Stock = ({navigation}) => {
    return (
        <Layout style={{flex: 1, padding: 20}}>
            <Layout>
                <Text category="h2" >Claim a free slice of Stock</Text>
                <Text category="s1" >Pick a company you'd like to own and we'll invest up to $5 for you</Text>
            </Layout>
            <Layout style={styles.items}>
                <Layout style={styles.item}>
                    <Image source={require('./assets/tesla.png')} style={{width: 90, height: 90}} />
                </Layout>
                <Layout style={styles.item}>
                    <Image source={require('./assets/tesla.png')} style={{width: 90, height: 90}} />
                </Layout>
                <Layout style={styles.item}>
                    <Image source={require('./assets/tesla.png')} style={{width: 90, height: 90}} />
                </Layout>
                <Layout style={styles.item}>
                    <Image source={require('./assets/tesla.png')} style={{width: 90, height: 90}} />
                </Layout>
                <Layout style={styles.item}>
                    <Image source={require('./assets/tesla.png')} style={{width: 90, height: 90}} />
                </Layout>
                <Layout style={styles.item}>
                    <Image source={require('./assets/tesla.png')} style={{width: 90, height: 90}} />
                </Layout>
                <Layout style={styles.item}>
                    <Image source={require('./assets/tesla.png')} style={{width: 90, height: 90}} />
                </Layout>
                <Layout style={styles.item}>
                    <Image source={require('./assets/tesla.png')} style={{width: 90, height: 90}} />
                </Layout>
                <Layout style={styles.item}>
                    <Image source={require('./assets/tesla.png')} style={{width: 90, height: 90}} />
                </Layout>
            </Layout>
            <Layout>
                <Button disabled onPress={()=>navigation.goBack()}>Continue</Button>
            </Layout>
        </Layout>
    )
}

const styles=StyleSheet.create({
    items: { 
        flex: 1,
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        flexWrap: 'wrap',
        marginTop: 20,
        marginBottom: 20,
    },
    item: {
        marginTop: 10,
        padding: 8,
        backgroundColor: "#ebedf0",
        borderRadius: 8,
    }
})

export default Stock
