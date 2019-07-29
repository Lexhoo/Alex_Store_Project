import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data'
const ProductContext = React.createContext()



class ProductProvider extends Component {
    state ={
        products: storeProducts,
        detailProduct: detailProduct
    }
    setProducts = () => {
      let tempProducts = [];
      storeProducts.forEach(item => {
        const singleItem = { ...item};
        tempProducts = [...tempProducts, singleItem];
      });
      this.setState(() => {
        return { products: tempProducts };
      });
    };

    getItem = (id) =>{
      const product = this.state.products.find(item => item.id === id);
      return product;
    };


    handleDetail = (id) =>{
     const product = this.getItem(id);
     this.setState(()=> {
       return {detailProduct: product}
     })
    }
    addToCard = id =>{
        console.log(`hi from add to card.id is ${id}`);
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