import './Footer.css'
const Footer=()=>{
    return(
        <>
          <footer>
            <div className="footer-first-component">
                <span><h2> Follow us</h2></span>
                <span><img src="https://theme.stratstone.com/images/social/facebook.png" alt=""/></span>
                <span><img src="https://theme.evanshalshaw.com/images/social/instagram.png"alt="" /></span>
                <span><img src="https://theme.evanshalshaw.com/images/social/youtube.png" alt=""/></span>
                <span><img src="https://theme.evanshalshaw.com/images/social/linkedin.png" alt=""/></span>
                <span><img src="https://theme.evanshalshaw.com/images/social/twitter.png" alt=""/></span>
            </div>
            <div className="footer-middle-component">
                <div>
                    <h3>information</h3>
                    <p>Terms and Condition</p>
                    <p>Price Guarantee</p>
                    <p>Cookie Policy</p>
                    <p>Trading Companies</p>
                    <p>Privacy Notice</p>
                </div>
                <div>
                    <h3>More</h3>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Owners Club</p>
                    <p>News</p>
                    <p>Blog</p>
                    <p>Events</p>
                </div>
                <div>
                    <h3>Custumer services</h3>
                    <p>Custumer Care</p>
                    <p>Contact Us</p>
                    <p>Dealerships</p>
                </div>
            </div>
            <div className='footer-final-component'>
               <h4>&copy All rights reserved.</h4> 
            </div>
          </footer>
        </>
    )
}
export default Footer