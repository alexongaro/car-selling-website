import React from 'react'
import "./NoteFound.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Notefound = () => {
  return (
    <div className='notfound'>
        <Link to ='/'>
        <div>
          <img src='https://images-na.ssl-images-amazon.com/images/G/01/error/title._TTD_.png' />
        </div>
        <div>
           <img src='https://images-na.ssl-images-amazon.com/images/G/01/error/19._TTD_.jpg'/>
        </div>

        </Link>
          
    </div>
  )
}

export default Notefound