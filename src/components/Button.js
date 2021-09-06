import React from 'react'
import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ButtonComponent = ({text,onPress}) => {
    return (
       <TouchableOpacity onPress={onPress} style={styles.root}>
           <Text style={styles.text}>{text}</Text>
       </TouchableOpacity>
    )
}

export default ButtonComponent

const styles = StyleSheet.create({
    root:{
        // backgroundColor:'#e47911',
        margin:10,
        height:35,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        borderWidth:2,
        // borderColor:'#d97818'
    },
    text:{
        fontSize:16,

    }
})
