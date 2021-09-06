import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react'
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import product from '../../data/product'
import Button from '../../components/Button'
import { decreaseItem, increaseItem } from '../../redux/Action'
const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null)
    // console.log(selectedOption);

    const quantity = useSelector(state => state.quantity)

    const dispatch = useDispatch()

    return (
        <View>
            <View >

            </View>
            <View>
                <Text>{product.description}</Text>
            </View>
           <View>
            <Picker
            selectedValue={selectedOption}
            onValueChange={(itemValue,itemIndex)=>
                setSelectedOption(itemValue)
            }
            >
                {
                    product.options.map((item)=>(
                        <Picker.Item key={item} label={item} value={item}/>
                    ))
                }
            </Picker>
           </View>

           <View style={styles.quantityContainer}>
               <TouchableOpacity
                style={styles.button}
                 onPress={()=>dispatch(increaseItem())}>
                   <Text style={styles.textButton}>+</Text>
               </TouchableOpacity >
                <Text
                 style={styles.textQuantity}>
                     {quantity}
                </Text>
                <TouchableOpacity
                style={styles.button} 
                onPress={()=>dispatch(decreaseItem())} >
                <Text 
                style={[styles.textButton,styles.textButtonMinus]}>
                    -
                </Text>
                </TouchableOpacity>
               {/* <Button style={styles.button} onPress={()=>dispatch(increaseItem())} text="+" color="#8b9299"/> */}
               {/* <Button style={styles.button}  onPress={()=>dispatch(decreaseItem())} text="-" color="#8b9299"/> */}
           </View>

             <View>
               <TouchableOpacity style={[styles.buttonCart]}>
                   <Text>Add To Cart</Text>
               </TouchableOpacity>
               <TouchableOpacity style={[styles.buttonCart]}>
                   <Text>Buy Now</Text>
               </TouchableOpacity>
             </View>

        </View>
    )
}

export default ProductScreen

const styles = StyleSheet.create({
    quantityContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        margin:20,
    },
    textQuantity:{
        fontSize:20
    },
    button:{
        fontSize:19,
        backgroundColor:'#D3D8DE',
        borderWidth:1,
        borderRadius:3
    },
    textButton:{
        fontSize:23,
        paddingTop:3,
        paddingBottom:3,
        paddingRight:3,
        paddingLeft:3
    },
    textButtonMinus:{
        paddingTop:3,
        paddingBottom:3,
        paddingRight:7,
        paddingLeft:7
    },
    buttonCart:{
        backgroundColor:'#e67022',
        alignItems:'center',
        justifyContent:'center',
        height:29,
        marginBottom:20,
        marginLeft:20,
        marginRight:20,
    }
})
