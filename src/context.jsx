import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data'
const ProductContext = React.createContext()



class ProductProvider extends Component {
    state ={
        products: storeProducts,
        detailProduct: detailProduct
    }
    handleDetail = () =>{
        console.log('hi from details');
    }
    addToCard = () =>{
        console.log('hi from add to card');
    }
    render() {
        return(        
        <ProductContext.Provider
        value={{
            ...this.state,
            handleDetail:this.handleDetail,
            addToCard:this.addToCard,
        }}>
            {this.props.children}
        </ProductContext.Provider>
        
        )  
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };