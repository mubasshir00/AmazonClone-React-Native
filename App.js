import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import HomeScreen from './src/screens/Home/HomeScreen'
import ProductScreen from './src/screens/ProductScreen/ProductScreen'
import ShoppingCartScreen from './src/screens/ShoppingCartScreen/ShoppingCartScreen'

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
      {/* <HomeScreen/> */}
      {/* <ProductScreen/> */}
      <ShoppingCartScreen/>
      </SafeAreaView>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
