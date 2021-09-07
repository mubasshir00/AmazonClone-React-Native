import React, { useCallback, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

const ImageCarousel = ({images}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const windowWidth = useWindowDimensions().width

    const flatListUpdate = useCallback(({viewableItems})=>{
        if(viewableItems.length>0){
            setActiveIndex(viewableItems[0].index||0)
        }
    },[])

    return (
        <View style={styles.root}>
            <FlatList
            data={images}
            horizontal
            renderItem={({item})=>(
                <Image style={[styles.image,{width:windowWidth-40}]} source={{uri:item}}/>
            )}
            showsHorizontalScrollIndicator={false}
            snapToInterval={windowWidth-20}
            snapToAlignment={'center'}
            decelerationRate={'fast'}
            viewabilityConfig={{
                viewAreaCoveragePercentThreshold:50,
            }}
            onViewableItemsChanged={flatListUpdate}

            />
            <View style={styles.dots}>
                {images.map((image,index)=>(
                    <View 
                     style={[styles.dot,{backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed'}]}/>
                ))}
            </View>
        </View>
    )
}

export default ImageCarousel

const styles = StyleSheet.create({
    root:{

    },
    image:{
        // width:100,
        margin:10,
        height:200,
        // backgroundColor:'red',
        resizeMode:'contain'
    },
    dots:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    dot:{
        width:10,
        height:10,
        borderColor:'grey',
        borderRadius:25,
        borderWidth:1,
        margin:5,
        backgroundColor:'#c9c9c9'
    }
})
