import './Sidebar.css'
const Sidebar = ()=>{
    return(
        <>
        <div className='main-division'>
        <section className='container'>
            <div className='sidebar-button'>
               <button>Montly price</button>
               <button>Total price</button>
            </div>
            <div className='price'>
                <span>Min price</span>
                <span>Max price</span>
            </div>
            <div className='choose-button'>
                <button>choose..</button>
                <button>choose..</button>
            </div>
            <div className='search-buttons'>
                <button>promotions</button>
                <button>stock type</button>
                <button>vehicle type</button>
                <button>make and model</button>
                <button>color</button>
                <button>body style</button>
                <button>No.of doors</button>
                <button>Trasmition</button>
                <button>Fuel type</button>
                <button>age </button>
                <button>Milage</button>
                <button>MPG</button>
                <button>CO2</button>
                <button>Offer Type</button>
                <button>Finance Type</button>
                <button>clear</button>
            </div>
        </section>
        </div>
       
        </>
    )
}
export default Sidebar