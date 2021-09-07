import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Price = ({price,oldPrice}) => {
    // const {price,oldPrice} = props;
    // console.log(price);
    return (
        <View style={styles.priceContainer}>
            <Text style={styles.price}>
                from : ${price}
            </Text>
        { oldPrice && <Text style={styles.oldPrice}>${oldPrice}</Text>}
        </View>
    )
}

export default Price

const styles = StyleSheet.create({
     priceContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    oldPrice:{
        fontSize:12,
        marginLeft:4,
        textDecorationLine:'line-through',
        color:'black',
        fontWeight:'bold'
    },
     price:{
        fontSize:20,
        fontWeight:'bold',
        color:'#FF6A3D'
    },
})
