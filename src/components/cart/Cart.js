import React from 'react';

const Cart = (props) => {

    const  cart = props.cart

    let NameOf = '' ;
    for (let i =0 ; i<cart.length ; i++){

        const countryName = cart[i];
        const name = countryName.name

        NameOf = name 
        
    }

    let popu = '';

    for(let i=0 ; i<cart.length ; i++){

        const countyPopu = cart[i] ; 
        const population = countyPopu.population 
        popu = population
    }
    return (
        <div>
            <h3>Cart-Container</h3>

            <p> Cart.length : { cart.length}</p>
            <p> Name Of Country : {NameOf}</p>
            <p>Country_Population : {popu}</p>
        </div>
    );
};

export default Cart;