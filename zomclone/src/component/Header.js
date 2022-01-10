import React from 'react';
import {Link} from 'react-router-dom';
import './header.css'

const Header = () =>{
  
    return(
        <React.Fragment>
           <div id="header">
                <div id="brand">
                <Link to="/">Zomclon</Link>
                </div>
                <div className="social">
                    <a href="www.facebook.com/">
                        <img src="https://i.ibb.co/wyH9JxS/facebook.png" alt="facebook" className="socialicon"/>
                    </a>
                    <a href="www.instagram.com/">
                        <img src="https://i.ibb.co/w0kZ5Hf/insta.png" alt="instagram" className="socialicon"/>
                    </a>
                </div>
            </div>

         
        </React.Fragment>
    )
}

export default Header;