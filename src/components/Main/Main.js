import './Main.css'
import Card from '../Card/Card'
import list from "../data.js"
import Sidebar from '../Sidebar/Sidebar'
const Main = ({handleitem})=>{
    return(
        <>
        <div className='main-division'>
        <section className='container'>
         <Sidebar />
        </section>
        <section className='listing'>
            <div>
                <div className='postalcode-area'>
                    <section className='postal-info'>
                      <span className="material-symbols-outlined location">location_on</span>
                      <div className=''>
                      <p>find a vehicle near you</p>
                      <p>please enter your postal code to view the nearest vehicle near you</p>  
                      </div>    
                    </section>
                    <section>
                        <form>
                            <input placeholder='Enter your post code' />
                            <button>search</button>
                        </form>
                    </section>
                </div>
            </div>
            <div className='card'>
               { list.map((item)=>( <Card key={item.id} item={item}  handleitem={handleitem}/> ))}
            </div>
        </section>
        </div>
       
        </>
    )
}
export default Main
