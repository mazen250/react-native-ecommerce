import { View, Text,StyleSheet,Pressable } from 'react-native'
import React, { useState } from 'react'
import { Ionicons , AntDesign} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const HomeHeader = () => {
    const [counter, setCounter] = useState(0)
  return (
    <View style={styles.container}>
        <Pressable style={styles.left}>
            <Text style={styles.logo}>Discover</Text>
        </Pressable>
        <Pressable style={styles.right}>
        <MaterialCommunityIcons name="bell-ring-outline" size={24} color="black" />
         <Text style={{fontSize:12}}>{counter}</Text>
        </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        
        marginTop: 20,
    },
    left:{
        marginLeft: 10,
    },
    logo:{
        fontSize: 24,
        fontWeight: 'bold',
    
    },
    right:{
        flexDirection: 'row',
        marginRight: 10,
    }
})

export default HomeHeader