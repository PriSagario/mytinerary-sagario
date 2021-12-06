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
        <footer className="siteHeader p-3 colorFooter">
            <Container className="footer">
            <div>
                <Link className="fooText" to= "/"> Home </Link>
                <Link className="fooText" to= "/cities"> Cities </Link>
            </div> 
            <div className="img_red">
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
