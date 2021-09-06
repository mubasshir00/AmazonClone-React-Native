import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


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
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>
                        from : ${price}
                    </Text>
                    {
                        oldPrice && <Text style={styles.oldPrice}>${oldPrice}</Text>
                    }
                    </View>
                </View>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        borderColor:"grey",
        borderRadius:5,
        borderWidth:1,
        margin:10
    },
    imageStyle:{
        flex:2,
        height:150,
        resizeMode:'cover',
    },
    rightContainer:{
        padding:10,
        flex:3,
    },
    title:{
        fontSize:18,
        color:'#444244',
    },
    price:{
        fontSize:18,
        fontWeight:'bold'
    },
    star:{
        flexDirection:'row',
        paddingRight:5
    },
    ratingContainer:{
        flexDirection:'row'
    },
    priceContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    oldPrice:{
        fontSize:12,
        marginLeft:4,
        textDecorationLine:'line-through'
    }
})
