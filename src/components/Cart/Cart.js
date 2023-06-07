import React, { useEffect, useState } from 'react'
import "./Cart.css"

function Cart({cart,handledelete}) {
  const checkout =()=>{
    fetch("/create-checkout-session",{
      method:"POSt",
      headers:{
          "content-type":"application/json"
      },
      body:JSON.stringify({
          items: [
              {id:1,quantity:3},
              {id:2,quantity:1},
          ]
      })
  }).then(res=>{
      if(res.ok)return res.json()
      return res.json().then(json => Promise.reject(json))
  }).then(({url})=>{
      // console.log(url)
      window.location = url
  }).catch(e=>{
      console.log(e.error)
  })
  }
  const [price,setPrice]=useState(0)
  const handleprice =()=>{
    let ans =0
    cart.map((item) =>(ans+=item.amount * item.price)) 
    setPrice(ans)
  }
  useEffect(()=>{
    handleprice()
  },[])
  return (
    <div>
      <h4>Switch and Save: Low APRs across hundreds of quality used car</h4>
      <div className='subtotal-division'>
        {cart.map((item)=>
          <div className='cart-container'>
            <div className='cart-division'>
            <img src={item.image} style={{width:"400px"}} />
              <div>
              <h4>{item.name}</h4>
                <h3>{item.model}</h3>
                <h3>in stock at {item.location}</h3>
              </div>
              <div className='cart-price'>
                <h2>ksh {item.price}</h2>
                <h3>ksh <s>{item.monthlypay}</s></h3>
              </div>
            </div>
            <div className='cart-calculations'> 
              <div className='delete-cart'>
              <span class="material-symbols-outlined delete">delete</span>
              <button onClick={()=>handledelete(item.id)}>DELETE</button>
              </div>
              <div className='cart-buttons'>
                <button>+</button>
                {/* <button></button> */}
                <button>-</button>
              </div>
            </div>
            <div>
              <h3>cart summmary</h3>
              <h3>total price:</h3>
            </div>
          </div>

          
        )}
        <div className='subtotal-container'>
          <h3>CART SUMMMARY</h3>
          <div className='cart-subtotal'>
            <h3>subtotal</h3>
            <p>ksh {price}</p>
          </div>
          <button onClick={()=>checkout()}>check out ksh({price})</button>
        </div>
      </div>  
    </div>
  )
}

export default Cart
