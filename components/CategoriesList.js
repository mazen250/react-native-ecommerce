import { View, Text, ScrollView,StyleSheet, Pressable } from 'react-native'
import React,{useState,useEffect} from 'react'
import axios from 'axios'

const CategoriesList = () => {
    const [categories, setCategories] = useState([
        {
            id: 1,
            name: 'All',
        },
        {
            id: 2,
            name: 'Smartphones',
        },
        {
            id: 3,
            name: 'Laptops',
        },
        {
            id: 4,
            name: 'fragrances',
        },
        {
            id: 5,
            name: 'skincare',
        },
        {
            id: 6,
            name:'groceries'
        },
        {
            id: 7,
            name:'home-decoration'
        },
    ])
    const [currentTab, setCurrentTab] = useState(1)

    return (
     <View>   
    <ScrollView horizontal={true} style={styles.container} showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
            <View key={category.id} style={{borderRadius:10}}>
            <Pressable style={[styles.category,
                {backgroundColor: currentTab === category.id ? 'black' : '#e7e7e7'},
                
            ]}
            onPress={() => setCurrentTab(category.id)}
             >
                <Text style={[styles.text,
                    {color: currentTab === category.id ? 'white' : 'black'},
                ]}>{category.name}</Text>
            </Pressable>
            </View>
        ))}

    </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'transparent',
        marginBottom: 10,

    },
    category: {
       
        // fontWeight: 'bold',
        textAlign: 'center',

        width: 120,
        marginTop: 10,
        marginLeft: 12,
        color: 'black',
        backgroundColor: '#e7e7e7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 35,

    },
    text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 13,
    }

})

export default CategoriesList