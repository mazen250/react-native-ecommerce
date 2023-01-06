

import useCartStore from '../stores/CartStore'
import { View, Text,StyleSheet, Image, Pressable,Platform } from "react-native";
import React, { useEffect } from "react";

import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import HomeHeader from "../components/HomeHeader";

const Cart = () => {
  const cart = useCartStore(state => state.cart)
  const addToCart = useCartStore(state => state.addToCart)
  const removeFromCart = useCartStore(state => state.removeFromCart)
  const clearCart = useCartStore(state => state.clearCart)
  const navigation = useNavigation();
  const [total, setTotal] = React.useState(0)
  const [itemQuantity, setItemQuantity] = React.useState(1)
  if(cart.length === 0){
    return (
      <View style={styles.container}>
      <HomeHeader />
      <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}>
        <Text style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
          marginTop: 10,
          borderColor: "black",
          borderWidth: 1,
          padding: 10,
          borderRadius: 10,
        }}>No items in cart</Text>
      </View>
      </View>
    )
  }

  const addQuantity = (item) => {
    setItemQuantity(itemQuantity + 1)
    setTotal(total + item.price)
  }
  return (
    <View style={styles.container}>
    <HomeHeader />
    
    <ScrollView style={{
      width: "100%",
      
    }}>
    {cart.map((item) => {
      return (
        <>
        
          <View style={styles.item} key={item.id}>
            <Image source={{ uri: item.thumbnail }} style={{ height: 120, width: "50%",borderRadius:10 }} />
            <View style={styles.desc}>
            <Text style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              marginTop: 10,
              borderColor: "black",
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              width: "70%",
            }}>{item.title}</Text>
            <Pressable onPress={
              () => removeFromCart(item)
            }
            style={styles.button}
            >
              <Text style={{
                color: "white",
                fontSize: 12,
              }}>Remove from cart</Text>
            </Pressable>
            <Pressable onPress={
              () => navigation.navigate('Details', {item})
            }
            style={styles.button}
            >
              <Text style={{
                color: "white",
                fontSize: 13,
              }}>Product Details</Text>
            </Pressable>
            <View style={styles.qauntity}>
            <Pressable onPress={
              () => alert("Quantity")
            }
            style={styles.arrow}
            >
              <Text style={{
               color: "black",
               fontSize: 30,
              }}>+</Text>
            </Pressable>
            <Pressable onPress={
              () => addQuantity(item)
            }
            style={styles.arrow}
            >
              <Text style={{
                color: "black",
                fontSize: 30,
                paddingBottom: 70,
              }}>_</Text>
            </Pressable>
            
            </View>
            <Text>quantity:{itemQuantity}</Text>
            </View>
          </View>
        </>
      );
    })}
    </ScrollView>
  </View>
  )}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "white",
    marginTop: 20,
   
  },
  item: {
    width: "100%",
    height: 255,
    backgroundColor: "white",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "100%",
    padding: 10,
    paddingBottom: 20,
    flexDirection: "row",
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
    height: 36,
    width: 140,
  },
  desc: {
    width: "50%",
    height: 190,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
  },
  qauntity: {
    width: "80%",
    height: 40,

    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
    flexDirection: "row",
  },
})
  


export default Cart