import { View, Text, Image, Pressable } from 'react-native'
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { FlashList } from "@shopify/flash-list";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import SavedStore from '../stores/SavedStore';
const ProductsSection = () => {
    const navigation = useNavigation(); 
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    useEffect(() => {
        axios.get('https://dummyjson.com/products?limit=30')
        .then(res => {
            setProducts(res.data.products)
        }).then(()=>{
            setLoading(false)
        })
        .catch(err => {
            console.log(err)
            setError(true)
            setErrorMessage(err.message)
        })
    }, [])
 
       const addItem = SavedStore(state => state.add)
       
         const saved = SavedStore(state => state.saved)
         const renderItem = ({item}) => {
        return (
            <Pressable key={item.id} style={{
                height: 300,
                width: "90%",
                backgroundColor: "white",
                margin: 10,
                borderRadius: 10,
                marginBottom: 30,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,  
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 3,
                alignItems: 'center',
            }}
            onPress={() => navigation.navigate('Details', {item})}
            > 
                {/** add a buttom at the top left with a heart icon */}
                    <Pressable style={{position: 'absolute',
                            top: 10,
                            right: 10,
                            zIndex: 1,
                        }}
                        onPress={() =>{
                          if(saved.find(product => product.id === item.id)){
                            alert('Already saved')
                          
                          }
                            else{
                                addItem(item)
                                alert('Added to saved') 
                                
                            }


                        }}
                        >
                    <Ionicons name="heart" size={30} color="white" />
                    </Pressable>
                <Image source={{uri: item.thumbnail}} style={{height:"70%", width: "100%",borderRadius:10}}/>
                <View style={{
                    padding: 10,
                    alignContent: 'center',
                    overflow: 'hidden',
                }}>
                <Text style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: 'grey',
                    width: "100%",
                }}>{item.title}</Text>
                <View style={
                    {
                        flexDirection: 'row',
                     
                        alignItems: 'center',
                    }
                }>
                    {item.discountPercentage && <Text style={{fontSize: 11,
                        color: 'grey',marginRight:10,
                            
                        }}>{ 
                            Math.round((item.price - (item.price * item.discountPercentage / 100))*100)/100
                        }$</Text>}
                <Text style={{
                    fontSize: 10,
                    color: 'grey',
                    textDecorationLine: 'line-through',
                        textDecorationStyle: 'solid',
                        textDecorationColor: 'black',

                }}>Price: {item.price}$</Text>
                    </View>
                </View>
                <Pressable style={{
                    backgroundColor: 'black',
                    height: 24,
                    width: "70%",
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,

                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 12,
                    }}>Add to Cart</Text>
                </Pressable>
            </Pressable>
        )
    }

  return (
    <View style={{
       
        justifyContent: 'center',
        alignItems: 'center',
        
        flexDirection: 'column',
    }}>
       {error && <Text>{errorMessage}</Text>}
         {loading && <Text>Loading...</Text>}
   
         <View style={
            {
                height: 500,
                width: "100%",
            }
        }>
        <FlashList 
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        estimatedItemSize={200}
    />

        </View>    
    </View>
  )
}

export default ProductsSection