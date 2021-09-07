import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseItem ,increaseItem } from '../redux/Action'
// import { decreaseItem, increaseItem } from '../../redux/Action'

const QuantitySelector = () => {
    const quantity = useSelector(state => state.quantity)
    const dispatch = useDispatch()
    return (
         <View style={styles.quantityContainer}>
               <TouchableOpacity
                style={styles.button}
                 onPress={()=>dispatch(increaseItem())}>
                     <View style={styles.buttonIcon}>
                        <FontAntDesign name="plus" size={17}/>
                     </View>
               </TouchableOpacity >
                <Text
                 style={styles.textQuantity}>
                     {quantity}
                </Text>
                <TouchableOpacity
                style={styles.button} 
                onPress={()=>dispatch(decreaseItem())} >
                    <View  style={styles.buttonIcon}>
                        <FontAntDesign name="minus" size={17}/>
                    </View>
                </TouchableOpacity>
               {/* <Button style={styles.button} onPress={()=>dispatch(increaseItem())} text="+" color="#8b9299"/> */}
               {/* <Button style={styles.button}  onPress={()=>dispatch(decreaseItem())} text="-" color="#8b9299"/> */}
           </View>
    )
}

export default QuantitySelector

const styles = StyleSheet.create({
     quantityContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        // margin:20,
        width:100,
        borderWidth:1,
        borderColor:'#e0dedc',
        borderRadius:3
    },
    textQuantity:{
        fontSize:20
    },
    button:{
        fontSize:19,
        backgroundColor:'#D3D8DE',
        borderWidth:0,
        borderRadius:3
    },
     buttonIcon:{
        padding:6
    },
})
