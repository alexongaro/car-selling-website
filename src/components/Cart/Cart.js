import React from 'react'
import "./Cart.css"

function Cart({cart,handledelete}) {
    console.log(cart)
  return (
    <div>
      <h4>Switch and Save: Low APRs across hundreds of quality used car</h4>
      <div className=''>
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
      </div>  
    </div>
  )
}

export default Cart