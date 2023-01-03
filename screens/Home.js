import { View, Text, SafeAreaView,StyleSheet,Platform,ImageBackground } from 'react-native'
import React from 'react'
import HomeHeader from '../components/HomeHeader'
import SearchHome from '../components/SearchHome'
import CategoriesList from '../components/CategoriesList'
import ProductsSection from '../components/ProductsSection'
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {

  return (
    <SafeAreaView style={styles.Container}>
     <ImageBackground source={require('../assets/backround.jpg')} style={{width: '100%', height: '100%'}}>
      {/* <Pressable onPress={() => Keyboard.dismiss()}> */}
      <HomeHeader />
      <SearchHome />
      <CategoriesList />
      <ProductsSection />
      {/* </Pressable> */}
      </ImageBackground>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: Platform.OS === 'android' ? 20 : 0,
    }
})

export default Home