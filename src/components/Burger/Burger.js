import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import './Burger.css';

const burger = (props) => {
    // gives you an array of the keys from an object
    // igKey = ingredient key
    // spread operator creates a new array -- access the given key of the ingredient
    const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) =>{
            console.log(igKey)
            return <BurgerIngredient key={igKey + i} type={igKey} /> // igKey is like salad, and i is like 1,2,3.
        });
    });

    console.log(props.ingredients);

    return (
        <div className='Burger'>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;