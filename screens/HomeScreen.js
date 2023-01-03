import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
const Stack = createNativeStackNavigator();
import Home from './Home'
import Details from './Details'


const HomeScreen = () => {
  return <Stack.Navigator>
        <Stack.Screen name="HomePage" component={Home} options={{
            headerShown: false
        }}/>
        <Stack.Screen name="Details" component={Details} 
           options={{
            headerTitleAlign: 'center',
            presentation: 'modal',
            headerStyle: {
                backgroundColor: '#eee',
            },
            headerTintColor: '#444',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            // headerRight: () => (
            //     <View style={{marginRight: 10}}>
            //           <MaterialCommunityIcons name="bell-ring-outline" size={24} color="black" />
            //     </View>
            // ),

            
           }}
        />
    </Stack.Navigator>
    
}

export default HomeScreen