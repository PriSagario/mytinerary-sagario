import React from 'react'
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

const HeroP = () => {
    return (
        <div className="textHero ">
            <h2 className="textTin"> MyTinerary </h2>
            <div className="textFrase">
            <p className="textOnly">
                Find your perfect trip, designed by insiders who know and love their cities!
            </p>
            <div>
            <Button size="lg" as={Link} to="/cities" className="buttonText">
                Choose your favourite destination!
            </Button>{" "}
            </div>
        </div>
        </div>
    )
}

export default HeroP
