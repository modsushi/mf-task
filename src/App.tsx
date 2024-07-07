import React from 'react';
import { useState } from 'react';
import './App.css';
const drinks  = [
  { name: 'Coffee', price: 480, id: 1 },
  { name: 'Tea', price: 280, id: 2 },
  { name: 'Milk', price: 180, id: 3 },
  { name: 'Coke', price: 190, id: 4 },
  { name: 'Beer', price: 580, id: 5 },
];

export default function App() {
  const [cart, setCart] = useState<Drink[]>([]);
  const buy = (drink:Drink) => {
    if (drink) {
      setCart([...cart, drink]);
    }
  }
  type Drink = {
    name: string;
    price: number;
    id: number;
  };

  const drinks  = [
    { name: 'Coffee', price: 480, id: 1 },
    { name: 'Tea', price: 280, id: 2 },
    { name: 'Milk', price: 180, id: 3 },
    { name: 'Coke', price: 190, id: 4 },
    { name: 'Beer', price: 580, id: 5 },
  ];

    return (
      <div className="App">
        <div>
        <h1>The Cafe</h1>
        <p>Order your drinks here</p>
        </div>
        <div style={{display:'flex', gap:5, justifyContent:'space-around', marginTop:50}}>
          <div>
               {
                drinks.map((drink) => (<>
                <div style={{position:'relative', width:'100%'}}>
                 { cart.filter( (f => f.id === drink.id)).length ? 
                 <div style={{borderRadius:'50%', background:'yellow', padding:10, position :'absolute', right: -20, top:-35}}>{cart.filter( (f => f.id === drink.id)).length}</div> : null
                
                 }
                 </div>
                  <div style={{ borderRadius:8, padding:'10px 15px', border:'1px solid #ccc', width:250, display:'flex', justifyContent:'space-between',
                  cursor:'pointer'}} key={drink.name} onClick={(d)=>{buy(drink)}}>
                    <div>{drink.name}</div>
                    <div>{drink.price} yen</div>
                  </div>
                  <div style={{'display':'flex', marginBottom:15, marginTop:5}} >

                  {
                    cart.filter( (f) => f.id === drink.id).map( (incart) => {
                      return <div style={{color:'green'}}>✓</div>
                    })
                  }
                  </div>
                  </>
                ))
              }
           </div>
           <div>
            <div style={{border:'1px solid #ccc', borderRadius:8, padding:'20px 50px'}}>

            <h2>Order Summary</h2>
            <p>Here is your order summary</p>
            <b>{cart.length} items</b>
            <p style={{fontSize:'larger'}}><b>Total { cart.reduce((prev, curr) => {
              return prev + curr.price
            },0)} yen</b></p>
            </div>
           </div>
        </div>
      </div>
    );
  }

  
