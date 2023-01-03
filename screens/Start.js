import { View, Text, Pressable,StyleSheet,Image,SafeAreaView } from 'react-native'
import React from 'react'
import StartStore from '../stores/Start'
import { StatusBar } from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons'
const Start = () => {

    const setStart = StartStore(state => state.setStart)
    return (
    <SafeAreaView style={style.container}>
        <Image source={require('../assets/start2.jpg')} style={style.image}/>
        <Text style={style.text}>Define yourself in your Unique way</Text>
        <View style={{
            width: '100%',
            height: 100,
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 0,

        }}>
      <Pressable onPress={()=>{
        setStart(false)
      }} 
        style={style.button}
      >

        <Text style={{
            fontSize: 24,
           
            color: 'white',
        }}>Start</Text>
        <AntDesign name="arrowright" size={24 } color="white" style={{
            paddingTop: 5,
            paddingLeft: 10,
        }}/>
      </Pressable>
    </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0, 0.60)',

        tintColor: 'rgba(0,0,0, 0.80)',
    },
    image: {
        width: "100%",
        height: "120%",
    },
    text: {
        fontSize: 65,
        fontWeight: 'bold',
        position: 'absolute',
        top: 100,
        left: 20,
        zIndex: 1,
        color: 'white',
    },
    button: {
        backgroundColor: 'black',
        width: '80%',
        height: 50,
        borderRadius: 10,
        position: 'absolute',
        bottom: 20,
        left: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    }
})

export default Start