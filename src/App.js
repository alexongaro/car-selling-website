
import './App.css';
import React, { useState } from 'react';
import {Route,Switch} from 'react-router-dom'
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Footer from './components/Footer/Footer'
import Notefound from './components/NoteFound/NoteFound';
import Cart from './components/Cart/Cart';
import Payment from './components/Payment/Payment';
function App() {
  const [cart, setCart] = useState([])
  const[payment,setPayment]=useState([])
  const [product,setProduct]=useState([])
  const [warning,setWarning]=useState(false)
  const handlepayment=(item)=>{
    if(payment.length===0){
    setPayment([item])
    console.log(payment)
      
    }
    console.log(payment)
  }
 
  const handleitem=(item)=>{
    
    let ispresent = false
    product.map((product)=>{
      if(product.id===item.id){
        ispresent =true
      }
    })
    if(ispresent){
    }else{
      setProduct([item])
    }
  }
  const addtocart =(item)=>{
    // console.log(item)
    let isthere = false
    cart.map((product)=>{
      if(item.id===product.id)
      isthere =true
    })
    if (isthere){
      setWarning(true)
      setTimeout(()=>{
        setWarning(false)
      },2000)
    }else{ 
      setCart([...cart,item])
    }
  }
  const handledelete=(id)=>{
  const arr = cart.filter((item)=>item.id!==id)
  setCart(arr)
  }
 
  return (
    <>
    
   <Navbar size={cart.length} warning={warning} />
   <Switch>
      <Route path='/' exact>
      <Main handleitem={handleitem} />
      </Route>
      <Route path="/login">
        <Login />
      </Route> 
      <Route path="/payment">
        <Payment payment={payment}/>
      </Route>    
      <Route path="/register">
        <Register />
      </Route>
      <Route path='/Productdetail'>
        <ProductDetail product={product} setProduct={setProduct} handlepayment={handlepayment} addtocart={addtocart}/>
      </Route>
      <Route path ='/cart'>
        <Cart cart={cart} setCart={setCart} handledelete={handledelete}/>
      </Route>
      <Route path="*">
        <Notefound />
      </Route>
   </Switch>
   <Footer />
    </>
  );
}

export default App;
