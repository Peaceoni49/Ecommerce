import React, { Component } from 'react';
import Product from './Product';
import { render } from '@testing-library/react';
import Title from "./Title";
import {storeProducts} from '../data';
import {ProductConsumer} from '../context';


class Productlist extends Component {
    state={
        products:storeProducts
    };
    render() {
        console.log(this.state.products);
    return (
       <React.Fragment>
           <div className="py-5">
           <div className="container">
             <Title name="our" title ="products"/>

           <div className="row">
            <ProductConsumer>
                {value => {
                 return value.products.map( product =>{
                     return <Product key={product.id} product={product}/>
                 })                 
                }}
            </ProductConsumer>
               </div>
            </div>
            </div>
       </React.Fragment>
    //    <Product/>
    
    );
};
};

export default Productlist;
