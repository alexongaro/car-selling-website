
import "./Card.css"
import {Link} from 'react-router-dom'
const Card = ({item,handleitem})=>{
   const {name,price,location,image,year,id,content}= item
   return(
    <>
    <div className="card-container" onClick={()=>{handleitem(item)}}>
         <h3>{name}</h3>
         <p>240kw xDrive40 M sport 76.6kwh 5dr Auto {year}</p>
         <Link to='/Productdetail'>
         <div className="image-container"><img src={image} alt=""/></div>
         </Link>
         <div>
            <h2>${price}</h2>
            <p>cash price</p>
         </div>
         <div className="card-location">
         <span className="material-symbols-outlined">location_on</span>
         <span>in stock at {location}</span>
         </div>
    </div>
    </>
   )
}
export default Card


