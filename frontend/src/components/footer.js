import React from 'react';
import { Link } from 'react-router-dom';
import {Container} from 'react-bootstrap';

const FooterP = () => {

    let imgSocial = <img 
  src= '../assets/socialMedia.png'
  width="200"
  height="90"
  alt="Social Media"
  />

    return (
        <footer className="siteHeader p-3 colorBgNav">
            <Container className="footer">
            <div>
                <Link className="linkText" to= "/"> Home </Link>
                <Link className="linkText" to= "/cities"> Cities </Link>
            </div> 
            <div>
              {imgSocial}  
            </div>
            <div>      
            <p className="linkText"> All rights reserved - 2021 - MyTinerary</p>
           </div> 
           </Container>
        </footer>
    )
}
export default FooterP
