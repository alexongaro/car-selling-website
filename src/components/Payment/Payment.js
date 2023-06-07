import React from 'react'
import "./Payment.css"
function Payment(payment={payment},handlepayment=handlepayment) {
  // console.log(item.year)
  return (
    <div>
      
        <div className="payment-container">
                <form className="payment-form">
                <h1>Payment</h1>
                <p>accepted cards</p>
                <div className="credit-cards">
                <i class="fa fa-cc-visa" style={{color:"navy"}}></i>
                <i class="fa fa-cc-amex" style={{color:'blue'}}></i>
                <i class="fa fa-cc-mastercard" style={{color:'red'}}></i>
                <i class="fa fa-cc-discover" style={{color:"orange"}}></i>
                </div>
                <div>
                    <label for="card-name">name of card</label>
                    <input type="text" name="card-name" />
                    <label for="card-number">Credit card number</label>
                    <input type="text" name="card-number"/>  
                </div>
                <div>
                    <label for="user"><span class="material-symbols-outlined">person</span>Full Name</label>
                    <input type="text" name="user"/>
                    <label for="email"><span class="material-symbols-outlined">mail</span>Email</label>
                    <input type="email" name="email"/>
                    <label for="address"><span class="material-symbols-outlined">contact_mail</span>Address</label>
                    <input type="text" name="addess"/>
                </div>
                <div>
                  <label> <input type="checkbox" />Do you agree with the terms of payment</label>  
                </div>
                <button className="payment-button">continue to checkout</button>  
                </form>
        </div>        
    </div>
  )
}

export default Payment