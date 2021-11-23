import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterP = () => {
    return (
        <footer className="siteHeader p-4 colorBgNav">
            <div>
                <Link className="linkText" to= "/"> Home </Link>
                <Link className="linkText" to= "/cities"> Cities </Link>
            </div> 
            <div>      
            <p className="linkText"> All rights reserved - 2021 - MyTinerary</p>
           </div> 
        
        </footer>
    )
}
export default FooterP
