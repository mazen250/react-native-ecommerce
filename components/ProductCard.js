import { View, Text } from 'react-native'
import React,{useState,useE} from 'react'
import { StyleSheet } from 'react-native'
import axios from 'axios'
const ProductCard = ({item}) => {
  return (
    <View key={item.id} style={{
        height: 230,
        width: "45%",
        backgroundColor: "white",
        margin: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    }}>
        <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'grey',
        }}>{item.title}</Text>
    </View>
)
  
}

export default ProductCard