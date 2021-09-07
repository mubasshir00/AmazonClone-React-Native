import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ProductItem from '../../components/ProductItem'
import cart from '../../data/cart'
import QuantitySelector from '../../components/QuantitySelector'
import CartProductItem from '../../components/CartProductItem'

const ShoppingCartScreen = () => {
    const totalPrice = cart.reduce(
        (total,item)=>
        total+item.item.price*item.quantity,0)
    return (
        <View>
            <FlatList
            data={cart}
            renderItem={({item})=><CartProductItem option={item.option} quantity={item.quantity} item={item.item}/>}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={()=>(
                <View>
                    <View>
                <Text>Subtotal ({cart.length} items) : {totalPrice.toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=> console.warn('Go ')}>
                <Text style={styles.text}>Proceed to Checkout</Text>
                </TouchableOpacity>
                </View>
            )}
            ListFooterComponent={() =>(
                <View>
                    <View>
                <Text>Subtotal ({cart.length} items) : {totalPrice.toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=> console.warn('Go ')}>
                <Text style={styles.text}>Proceed to Checkout</Text>
            </TouchableOpacity>
            </View>
            )}
            />
            <View>

            </View>
        </View>
    )
}

export default ShoppingCartScreen

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'yellow',
        borderColor:'grey',
        borderWidth:1,
        margin:10,
        padding:6,
    },
    text:{
        textAlign:'center',
        fontWeight:'bold'
    }
})
