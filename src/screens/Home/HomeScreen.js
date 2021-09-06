import React from 'react'
import { StyleSheet, Text, View ,Image, FlatList} from 'react-native'
import ProductItem from '../../components/ProductItem'
import products from '../../data/products'

const HomeScreen = () => {
    return (
       <View style={styles.page}>
             <FlatList
             data={products}
             renderItem={({item})=>{
                 return(
                     <ProductItem item={item}/>
                 )
             }}
            //  keyExtractor={({id})=>id}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
             />
       </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    page:{
        // flex:1,
        // flexGrow:1
    },
    contentContainer:{
        // flex:1,
        // flexGrow:1
    }
})
