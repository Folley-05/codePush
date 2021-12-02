import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Home = ({navigation}) => {
    return (
        <View style={styles.home}>
            <View style={styles.header}><Text style={styles.textHeader}>HOME</Text></View>
            <View style={styles.body}>
                <Text style={styles.titleBody}>WELCOME</Text>
                <Text style={styles.textBody}>Choose your UI KIT</Text>
                <View style={styles.items}>
                    <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('kitten')}>
                        <Image source={require('../../assets/akveo.png')} style={styles.imageItem} />
                        {/* <Image source={{uri: 'https://akveo.github.io/react-native-ui-kitten/docs/assets/img/akveo-logo.png'}} style={styles.imageItem} /> */}
                        <Text style={styles.textItem}>Kitten</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    home: {
        flex: 1,
    },
    header: {
        marginBottom: 40,
        borderBottomWidth: 1,
    },
    textHeader: {
        fontSize: 45,
        fontWeight: '600',
        textAlign: 'center',
        color: '#4f4f4f',
    },
    body: {
        flex: 1,
    },
    titleBody: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        textDecorationLine: 'underline',
        textAlign: 'center',
        color: '#4f4f4f',
    },
    textBody: {
        fontSize: 30,
        fontWeight: '500',
        textAlign: 'center',
        color: '#4f4f4f',
    },
    items: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 10,
        padding: 10,
        // borderWidth: 1,
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    imageItem: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    textItem: {
        fontSize: 25,
        fontWeight: '700',
        color: '#4f4f4f',
    },
})

export default Home
