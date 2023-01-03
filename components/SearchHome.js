import { View, Text,StyleSheet, TextInput, Pressable ,Keyboard } from 'react-native'
import React from 'react'
import { Ionicons , AntDesign} from '@expo/vector-icons';
const SearchHome = () => {
  return (
    <Pressable style={styles.container} 
        
    >
        <View style={styles.search}>
            <Ionicons name="search" size={24} color="black" />
            <TextInput placeholder="Search any products..." style={{marginLeft: 10}} />
        </View>
        <View style={styles.filter}>
            <AntDesign name="filter" size={24} color="white" />
        </View>  
    </Pressable>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'transparent',

    },
    search:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e7e7e7',
        width: '80%',
        height: 50,
        borderRadius: 10,
        padding: 10,
    },
    filter:{
        backgroundColor: 'black',
        width: 50,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default SearchHome