import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Price from './Price'


const ProductItem = ({item}) => {
    const {id,title,image,avgRating,ratings,price,oldPrice} = item
    return (
            <View style={styles.container}>
                <Image style={styles.imageStyle} source={{uri:image}}/>

                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.ratingContainer}>
                    <View style={styles.star}>
                      
                        {
                            [0,0,0,0,0].map((el,i)=>(
                                  <FontAwesome 
                                  key={`${id}-${i}`}
                                  style={styles.starIcon} 
                                  name={i<Math.floor(avgRating) ? 'star' : 'star-o'}
                                   size={18}
                                    color={"#e47911"}
                                    />
                            ))
                        }
                        </View>
                        <Text>
                            {ratings}
                        </Text>
                    </View>
                    {/* <View style={styles.priceContainer}>
                        <Text style={styles.price}>
                        from : ${price}
                    </Text>
                    {
                        oldPrice && <Text style={styles.oldPrice}>${oldPrice}</Text>
                    }
                    </View> */}
                    {/* <Price price={price} oldPrice={oldPrice ? oldPrice : ''} /> */}
                </View>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:6,
        borderColor:"grey",
        borderRadius:5,
        borderWidth:1,
        margin:6
    },
    imageStyle:{
        flex:2,
        height:130,
        resizeMode:'cover',
    },
    rightContainer:{
        padding:10,
        flex:3,
    },
    title:{
        fontSize:15,
        color:'#444244',
    },
    star:{
        flexDirection:'row',
        paddingRight:5
    },
    ratingContainer:{
        flexDirection:'row'
    },
   
})
