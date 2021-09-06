import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import HomeScreen from './src/screens/Home/HomeScreen'
import ProductScreen from './src/screens/ProductScreen/ProductScreen'

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
      {/* <HomeScreen/> */}
      <ProductScreen/>
      </SafeAreaView>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
