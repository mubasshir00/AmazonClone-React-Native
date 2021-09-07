import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react'
import {  ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import product from '../../data/product'
import Button from '../../components/Button'
import { decreaseItem, increaseItem } from '../../redux/Action'
import Price from '../../components/Price'
import FontAntDesign from 'react-native-vector-icons/AntDesign'
import ImageCarousel from '../../components/ImageCarousel'
import QuantitySelector from '../../components/QuantitySelector'

const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null)
    // console.log(selectedOption);

    const quantity = useSelector(state => state.quantity)

    const dispatch = useDispatch()
    

    return (
        <ScrollView style={styles.root}>
            <View>
                <Text style={styles.productTitle}>{product.title}</Text>
            </View>
            <ImageCarousel images={product.images}/>
            <View style={{alignItems:'center',padding:10}} >
                <Price {...product}/>
            </View>
            <View>
                <Text style={styles.desText}>{product.description}</Text>
            </View>
           <View style={styles.lowerDiv}>
            <Picker
            style={styles.pickerStyle}
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
            <QuantitySelector/>
         </View>


             <View>
               <TouchableOpacity style={[styles.buttonCart]}>
                   <Text>Add To Cart</Text>
               </TouchableOpacity>
               <TouchableOpacity style={[styles.buttonCart]}>
                   <Text>Buy Now</Text>
               </TouchableOpacity>
             </View>
        </ScrollView>
    )
}

export default ProductScreen

const styles = StyleSheet.create({
    root:{
        padding:10,
    },
    productTitle:{
        textAlign:'center',
        fontWeight:'bold',
        color:'#1A2238'
    },
    button:{
        fontSize:19,
        backgroundColor:'#D3D8DE',
        borderWidth:0,
        borderRadius:3
    },
    
    buttonCart:{
        backgroundColor:'#e67022',
        alignItems:'center',
        justifyContent:'center',
        height:29,
        marginBottom:20,
        marginLeft:20,
        marginRight:20,
    },
    buttonIcon:{
        padding:6
    },
    desText:{
        color:'black',
        fontSize:13,
        lineHeight:15,
        color:'grey',
        paddingBottom:10
    },
    pickerStyle:{
        width:200,
        borderColor:'black',
        borderWidth:6,
        backgroundColor:'#c2c6d1',
    },
    lowerDiv:{
        alignItems:'center',
        justifyContent:'center'
    }
})
