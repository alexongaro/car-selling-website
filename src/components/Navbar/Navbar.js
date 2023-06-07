import './Navbar.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useState } from 'react'
const Navbar = ({size,warning})=>{
  const[text,setText]=useState("")
  const[isOpen,setIsOpen]=useState(false)
  // console.log(text )
  
    return(
    <>
     <nav>
      <section className='navbar-row1'>
        <div>
          <Link to='/'>
          <img src={logo} alt=''/>
          </Link>
        </div>
        <div className='search-section'>
        <span class="material-symbols-outlined">search</span>
           <input type='text' onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className='cart-section'>
          <Link to ='/cart'>
          <span className="material-symbols-outlined">shopping_basket</span>
          <span>{size}</span>
        {warning ? (<p className='warning'>item is already added to cart</p>):""}
          </Link>
        </div>
        <div>
         <Link to='/login'> <button>log in</button></Link> 
          <Link to='/register'> <button>register</button> </Link> 
        </div>
        <div className='dropdown'>
          <button  onClick={()=>setIsOpen(true)}>categories</button>
          {
            isOpen && (
              <ul className='menu'>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
              </ul>
            )
          }
        </div>
      </section>  
      <section className='navbar-row2'>
        <div>
        <span className="material-symbols-outlined">directions_car</span>
        <span>same dat delivery available</span>
        </div>
        <div>
        <span className="material-symbols-outlined">done</span>
        <span>price Guarantee</span>
        </div>
        <div>
        <span className="material-symbols-outlined">home</span>
        <span>Home Delivery Available</span>
        </div>
        <div>
        <span className="material-symbols-outlined">attach_money</span>
        <span>Part-Exvhange Available</span>
        </div>
      </section> 
    </nav>
    </>
    )
    
}

export default Navbar