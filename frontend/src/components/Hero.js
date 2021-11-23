import React from 'react'
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

const HeroP = () => {
    return (
        <div className="textHero ">
            <h2 className="textTin"> MyTinerary </h2>
            <p>
                Find your perfect trip, designed by insiders with know and love their cities!
            </p>
            <div>
            <Button size="lg" as={Link} to="/cities" className="buttonText">
                Choose your favourite destination!
            </Button>{" "}
        </div>
        </div>
    )
}

export default HeroP
