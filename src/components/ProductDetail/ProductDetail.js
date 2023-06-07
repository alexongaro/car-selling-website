import "./productdetail.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
const ProductDetail=({product={product},handlepayment={handlepayment} ,addtocart={addtocart}})=>{
// console.log(product)
    return(
        <div className="product-division">
          
             <div className='cart-division'>
            {product.map((item)=>
           ( <div>
                <img src={item.image} alt='' style={{width:"900px", height:"500px"}}/>
                <div className='cart-flex'>
              <div className='car-infomation-section'>
                <div>
                <span className="material-symbols-outlined ">directions_car</span>
                </div>
                <div>
                <span><h3>Hatchback</h3></span>
                <span>body style</span>
                </div>
              </div>
              <div className='car-infomation-section'>
                <div>
                <span className="material-symbols-outlined">avg_pace</span>
                </div>
                <div>
                <span><h3>33527</h3></span> 
                <span>milage</span>
              </div>

              </div>
            </div>
            <div className='cart-flex'>
              <div className='car-infomation-section'>
                <div>
                <span className="material-symbols-outlined ">format_h4</span>
                </div>
                <div>
                <span><h3>Hatchback</h3></span>
                <span>body style</span>
                </div>
              </div>
              <div className='car-infomation-section'>
                <div>
                <span className="material-symbols-outlined">electric_bolt</span>
                </div>
                <div>
                <span><h3>33527</h3></span> 
                <span>milage</span>
              </div>

              </div>
            </div>
                 <h2>representative examples</h2>
                 <div className='cart-card'>
                    <div className='cart-payment-information'>
                      <p>60 monthly payment of</p>
                      <h3>$138.36</h3>
                    </div>
                    <div className='cart-payment-information2'>
                      <p>total price</p>
                      <h3>$138.36</h3>
                    </div>
                    <div className='cart-payment-information'>
                      <p>cash deposit</p>
                      <h3>$138.36</h3>
                    </div>
                    <div className='cart-payment-information2'>
                      <p>customer total deposit</p>
                      <h3>$138.36</h3>
                    </div>
                    <div className='cart-payment-information'>
                      <p>total amount payable</p>
                      <h3>$138.36</h3>
                    </div>
                    <div className='cart-payment-information'>
                      <p>apr(%)</p>
                      <h3>$138.36</h3>
                    </div>
                    <div className='cart-payment-information'>
                      <p>Fees where applicable</p>
                      <h3>$138.36</h3>
                    </div>
                 </div>
            </div>
            
            )    
            )}
            
        </div>
        <div className="product-price-container">
            {product.map((item)=>
            <div>
              <div className="product-logo">
                  <div> 
                  <h2>{item.name}</h2>
                  <h3>{item.model}</h3>
                  <h3>Auto {item.year}</h3>
                  </div>
                  <div>
                    <img src={item.carlogo} style={{width:"100px"}}/>
                  </div>
              </div>
             
              
                <div className="product-cart">
                    <div className="product-payment">
                     <div>
                      <h2>{item.monthlypay}</h2>
                      <p>monthly payment</p>
                     </div>
                     <div>
                      <h2>{item.cashprice}</h2>
                      <p>cash price</p>
                      </div>  
                    </div>
                    <div className="product-button">
                     <Link to="./payment">
                     <button onClick={()=>{handlepayment(item)}}>Buy Now</button>
                      </Link> 
                      <button>Enquire</button>
                      <button style={{backgroundColor:"orange"}} onClick={()=>{addtocart(item)}}>add to cart</button>
                     <p>call us on  01423 393 301</p>
                     </div> 
                </div>
            </div>)}

        </div>
        </div>
    )
}
export default ProductDetail
