import './Sidebar.css'
import itemListArray from '../data';
import Card from '../Card/Card';
import React,{useState} from 'react';
const Sidebar = ({handleitem})=>{
    const[searchTerm,setSearchTerm]=useState("")
      const [selectedIndex, setSelectedIndex] = useState(0);

      const handleTabClick = (index) => {
        setSelectedIndex(index);
      };
    return(
        <>
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
                            <input placeholder='Enter your post code' onChange={(e)=>setSearchTerm(e.target.value)}/>
                            <button>search</button>
                        </form>
                    </section>
                </div>
        <div className="vertical-tab">  
            <div className="tab-navigation">
                {itemListArray.map((itemList, index) => (
                <div
                    key={index}
                    className={`tab-item ${index === selectedIndex ? 'active' : ''}`}
                    onClick={() => handleTabClick(index)}
                >
                    {itemList[0].name}
                </div>
                ))} 
            </div>
            <div className="tab-content">
            <div className='card'>
            </div>
                <div className='card'>{itemListArray[selectedIndex].map((item)=>{
                   if(setSearchTerm==''){
                 return  <Card item={item} handleitem={handleitem}/>
                   }else if(item.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return  <Card item={item} handleitem={handleitem}/>
                   }
                }
                
                
                
                )}</div>
        

                
            </div>
    </div>
        </div>
        </>
    )
}
export default Sidebar