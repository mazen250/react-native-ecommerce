import { View, Text,StyleSheet,Image, ScrollView, Pressable } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons'

const Details = ({route,navigation}) => {
  const {item} = route.params
  useLayoutEffect(() => {
    const title = item.title
    navigation.setOptions({title:title})}, [navigation])
  return (
    <ScrollView style={styles.container}>
      <Image source={{uri:item.thumbnail}} style={{height:300,width:"90%",borderRadius:10,marginTop:20,marginLeft:20}}/>
      <Text style={{fontSize:20,fontWeight:'bold',marginTop:20,marginLeft:20}}>{item.title}</Text>
      <View style={styles.rating}>
        <Ionicons name="star" size={24} color="gold" />
        <Text style={{fontSize:15,color:"black",marginLeft:3}}>{item.rating}/5</Text>
      </View>
        <Text style={styles.desc}>{item.description}</Text>
        <Text style={styles.provider}>Provider: {item.brand}</Text>
        <Pressable style={styles.addToCart}>
          <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Add to Cart</Text>
          <View style={
                    {
                        flexDirection: 'row',
                     
                        alignItems: 'center',
                    }
                }>
                    {item.discountPercentage && <Text style={{fontSize: 11,
                        color: 'white',marginRight:10,
                            
                        }}>{ 
                            Math.round((item.price - (item.price * item.discountPercentage / 100))*100)/100
                        }$</Text>}
                <Text style={{
                    fontSize: 10,
                    color: 'white',
                    textDecorationLine: 'line-through',
                        textDecorationStyle: 'solid',
                        textDecorationColor: 'black',

                }}>Price: {item.price}$</Text>
                    </View>
        </Pressable>
        <View style={styles.images}>
        <ScrollView >
          {item.images.map((image,index) => {
            return <Image key={index} source={{uri:image}} style={{height:200,width:300,borderRadius:10,marginTop:20}}/>
          })}
        </ScrollView>
        </View>
    </ScrollView>
  )
}
const styles =StyleSheet.create({
  container:{
    flex:1,
    
    // alignItems:'flex-start',
    // flexDirection:'column',
    // textAlign:'flex-start',
    // justifyContent:'flex-start',
  },
  rating:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:20,
    marginTop:10,
  },
  desc:{
    fontSize:15,
    color:'grey',
    marginLeft:20,
    marginTop:10,
    fontSize:14,
  },
  provider:{
    fontSize:16,
    color:'grey',
    marginLeft:20,
    marginTop:10,
    
  },
  
  addToCart:{
    backgroundColor:'black',
    height:50,
    width:"80%",
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginTop:20,
  },
  images:{
    marginTop:20,
    alignItems:'center',
    justifyContent:'center',
  }
})

export default Details