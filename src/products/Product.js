import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    Image,
    ScrollView
} from 'react-native'
import axios from 'axios'
import { BASE_API_URL } from './global/util'
import ProductList from './ProductList'


class Product extends Component {
    state = {
        dataProducts: [],
        products: [],
        product_names: [],
        product_prices: [],
    }

    componentDidMount(){
        this.getProducts()
    }


    getProducts = () => {
        console.log('function getProducts dipanggil')

        axios.get(BASE_API_URL + '/shoppinglists')
            .then(response => {
                this.setState({
                    dataProducts: response.data,
                })
            })
            .catch(error => {
                console.log(error)
            })
    }


    render(){
        return (
          <ScrollView>
            {this.state.dataProducts.length === 0 ? (
              <ActivityIndicator
                style={{ marginTop: 50 }}
                size="large"/>) : (
                  this.state.dataProducts.map((dataku, index) =>
                   <ProductList
                       key = {index}
                       data = {dataku}
                   />
                  )
                )}
          </ScrollView>
        )
    }
}

export default Product