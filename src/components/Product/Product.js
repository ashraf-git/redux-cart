import React from 'react';

const Product = (props) => {
    const {addToCart, product} = props;
    return (
        <div style={{border: '1px solid tomato', padding:'5px', margin: '5px'}}>
            <h5>{product.name}</h5>
            <button onClick={() => addToCart(product.id)}>add to cart</button>
        </div>
    );
};

export default Product;