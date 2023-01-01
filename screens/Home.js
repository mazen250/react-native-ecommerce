import { View, Text, SafeAreaView,StyleSheet,Platform, Pressable,Keyboard } from 'react-native'
import React from 'react'
import HomeHeader from '../components/HomeHeader'
import SearchHome from '../components/SearchHome'
import CategoriesList from '../components/CategoriesList'

const Home = () => {

  return (
    <SafeAreaView style={styles.Container}>
      <Pressable onPress={() => Keyboard.dismiss()}>
      <HomeHeader />
      <SearchHome />
      <CategoriesList />
      </Pressable>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? 20 : 0,
    }
})

export default Home