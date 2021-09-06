import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Price = () => {
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

const styles = StyleSheet.create({})
