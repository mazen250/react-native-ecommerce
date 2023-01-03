import { View, Text,StyleSheet, Image, Pressable,Platform } from "react-native";
import React, { useEffect } from "react";
import SavedStore from "../stores/SavedStore";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import HomeHeader from "../components/HomeHeader";
const Saved = () => {
  const saved = SavedStore(state => state.saved)
  //delete item from saved
  //remove duplicate items

  const navigation = useNavigation();
  const removeItem = SavedStore(state => state.remove)
  

  if(saved.length === 0){
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
        }}>No saved items</Text>
      </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <HomeHeader />
      
      <ScrollView style={{
        width: "100%",
        
      }}>
      {saved.map((item) => {
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
                () => removeItem(item)
              }
              style={styles.button}
              >
                <Text style={{
                  color: "white",
                  fontSize: 12,
                }}>Remove from saved</Text>
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
              </View>
            </View>
          </>
        );
      })}
      </ScrollView>
    </View>
  );
};

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
    height: 205,
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
  }
})

export default Saved;
