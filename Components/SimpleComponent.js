import React from 'react'
import DoFilter from './DoFilter';
import {useState} from 'react'




function SimpleComponent() {
  const  [prod_array,SetProdArray] = useState([
        {name: 'Spanner', price: 250, instock: true},
        {name: 'Hammer', price: 200, instock: true},
        {name: 'Hammer-Splint', price: 450, instock: true},
        {name: 'HeavyThor', price: 375, instock: true},
        {name: 'ScrewDriver', price: 255, instock: true},
    
        {name: 'Pipe', price: 250, instock: true},
        {name: 'Bricks', price: 500, instock: true},
        {name: 'Concrete', price: 450, instock: true},
        {name: 'Wood', price: 375, instock: true},
        {name: 'Doors', price: 255, instock: true},
    
        {name: 'Windows', price: 2500, instock: true},
        {name: 'Ledges', price: 2000, instock: true},
        {name: 'BallBearings', price: 450, instock: true},
        {name: 'Chains', price: 375, instock: true},
        {name: 'Saws', price: 255, instock: true},
    
        {name: 'Tables', price: 4250, instock: true},
        {name: 'Tops', price: 200, instock: true},
        {name: 'Caps', price: 450, instock: true},
        {name: 'Metal Balls', price: 375, instock: true},
        {name: 'Levers', price: 255, instock: true}
    ])

    function FilterArray()
    {
        let price = prod_array.filter(function (e) {
            return e.price > 200;
        });
        price.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
         SetProdArray(price)
    }

    function RestoreArray()
    {
        SetProdArray([
            {name: 'Spanner', price: 250, instock: true},
            {name: 'Hammer', price: 200, instock: true},
            {name: 'Hammer-Splint', price: 450, instock: true},
            {name: 'HeavyThor', price: 375, instock: true},
            {name: 'ScrewDriver', price: 255, instock: true},
        
            {name: 'Pipe', price: 250, instock: true},
            {name: 'Bricks', price: 500, instock: true},
            {name: 'Concrete', price: 450, instock: true},
            {name: 'Wood', price: 375, instock: true},
            {name: 'Doors', price: 255, instock: true},
        
            {name: 'Windows', price: 2500, instock: true},
            {name: 'Ledges', price: 2000, instock: true},
            {name: 'BallBearings', price: 450, instock: true},
            {name: 'Chains', price: 375, instock: true},
            {name: 'Saws', price: 255, instock: true},
        
            {name: 'Tables', price: 4250, instock: true},
            {name: 'Tops', price: 200, instock: true},
            {name: 'Caps', price: 450, instock: true},
            {name: 'Metal Balls', price: 375, instock: true},
            {name: 'Levers', price: 255, instock: true}
        ])
    }
    return (
        <div>
            {
                prod_array.map(prod => {
                return (
            <h2>{`Product Name ${prod.name} Product Price ${prod.price}`}</h2>
                )})
                
            }
        <DoFilter filterTrigger={FilterArray} restoreTrigger={RestoreArray}></DoFilter>    
        
        </div>
    )
}

export default SimpleComponent
