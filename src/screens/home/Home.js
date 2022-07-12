import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { NativeBaseProvider, Box, Container, Center, Text, Image, ScrollView, Pressable } from 'native-base'

const Home = ({navigation}) => {
    return (
        <NativeBaseProvider>
        <ScrollView>
        <Box bg="#ebedf0" h="full" alignItems="center" justifyContent="center" >
            <Text fontSize="2xl" fontWeight="bold" margin="3" color="gray.500" >Choose An Application</Text>
            <Box maxW="80" bg="white" rounded="lg" overflow="hidden" p="5" mb="4"
                borderColor="coolGray.200" borderWidth="3"
            >
                <Box flexDirection="row" alignItems="center" justifyContent="space-between"
                >
                    <Image source={require('../../assets/akveo.png')} alt="kitten" w="100" h="100" mr="20" />
                    <TouchableOpacity onPress={()=>navigation.navigate('kitten')} >
                        <MaterialIcons name="chevron-right" size={50} color="#7f8c8d" alt="public" />
                    </TouchableOpacity>
                </Box>
                <Box>
                    <Text fontSize="xl" fontWeight="700" >kitten App</Text>
                    <Text fontSize="sm" color="gray.500" >an app build with eva design</Text>
                </Box>
            </Box>
            <Box maxW="80" bg="white" rounded="lg" overflow="hidden" p="5" mb="4"
                borderColor="coolGray.200" borderWidth="3"
            >
                <Box flexDirection="row" alignItems="center" justifyContent="space-between"
                >
                    <Image source={require('../../assets/public.png')} alt="public" w="100" h="100" mr="20" />
                    <TouchableOpacity onPress={()=>navigation.navigate('public')} >
                        <MaterialIcons name="chevron-right" size={50} color="#7f8c8d" alt="public" />
                    </TouchableOpacity>
                </Box>
                <Box>
                    <Text fontSize="xl" fontWeight="700" >Public App</Text>
                    <Text fontSize="sm" color="gray.500" >an investment application</Text>
                </Box>
            </Box>
            <Box maxW="80" bg="white" rounded="lg" overflow="hidden" p="5" mb="4"
                borderColor="coolGray.200" borderWidth="3"
            >
                <Box flexDirection="row" alignItems="center" justifyContent="space-between"
                >
                    <Image source={require('../../assets/gojek.png')} alt="gojek" w="100" h="100" mr="20" />
                    <TouchableOpacity onPress={()=>navigation.navigate('kitten')} >
                        <MaterialIcons name="chevron-right" size={50} color="#7f8c8d" alt="public" />
                    </TouchableOpacity>
                </Box>
                <Box>
                    <Text fontSize="xl" fontWeight="700" >Gojeck App</Text>
                    <Text fontSize="sm" color="gray.500" >one application for all needs</Text>
                </Box>
            </Box>
            
        </Box>
        </ScrollView>
        </NativeBaseProvider>
    )
}

// const styles=StyleSheet.create({
// })

export default Home
