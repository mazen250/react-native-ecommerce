import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Saved from './screens/Saved';
import Cart from './screens/Cart';
import Setting from './screens/Setting';
import { Ionicons , AntDesign} from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SavedStore from './stores/SavedStore';
import Start from './screens/Start';
import { useState } from 'react';
import StartStore from './stores/Start';
import useCartStore from './stores/CartStore';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  const start = StartStore(state => state.start)
  const saved = SavedStore(state => state.saved)
  const cart = useCartStore(state => state.cart)
  
  
  return (
    <NavigationContainer>
      {start ? <Tab.Navigator
        screenOptions={{
         //hide the tab bar at the bottom
          tabBarStyle: {
            display:"none"
          }
          
        }}
      >
        <Tab.Screen name="Start" component={Start} options={{
          headerShown: false,
        }}/>
      </Tab.Navigator> : 
        <Tab.Navigator 
        screenOptions={{
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            // borderTopLeftRadius: 30,
            // borderTopRightRadius: 30,
             backgroundColor: '#e7e7e7',

          },
          tabBarShowLabel: false,
}}
    >
      {start ? <Tab.Screen name="Start" component={Start} options={{
        headerShown: false,
      }}/> : null}


      <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          headerShown: false,

        }}
      />
      <Tab.Screen name="Saved" component={Saved} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <View 
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: 50,
              height: 50,
          
              
            }}

            >
             <AntDesign name="hearto" size={24} color={color} />
              <Text style={{
                paddingBottom: 10,
                fontSize: 10,
              }}>{saved.length}</Text>
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen name="Cart" component={Cart} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <View 
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: 50,
              height: 50,
          
              
            }}

            >
              <Ionicons name="cart" color={color} size={size} />
              <Text style={{
                paddingBottom: 10,
                fontSize: 10,
              }}>{cart.length}</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Location" component={Setting} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
        }

    
         
      <StatusBar style="light" 
      backgroundColor="black"
      />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
