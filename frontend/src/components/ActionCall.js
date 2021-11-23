import React from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

const ActionCall = () => {
    return (
        <div>
            <Button size="lg" as={Link} to="/cities" className="">
                Choose destination now!
            </Button>{" "}
        </div>
    );
};

export default ActionCall
