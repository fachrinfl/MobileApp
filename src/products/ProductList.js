import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'


// Function based component
const ProductList = (data) => {
    const dataHasil = data.data
    console.log(data.data)
    return(
        <View style={{ backgroundColor: '#ffffff', margin: 10 }}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={{ uri: dataHasil.image }}
                       style={{ width: 100, height: 100, resizeMode: 'contain' }}
                />
                <View style={{ marginLeft: 15 }}>
                    <Text style={{ marginTop: 20, fontSize: 20 }}>{dataHasil.product_name}</Text>
                    <Text style={{ fontSize: 15 }}>{dataHasil.price}</Text>
                </View>
            </View>
        </View>
    )
}

export default ProductList