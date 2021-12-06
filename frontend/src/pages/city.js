import React from "react"
import NavBarP from '../components/Navbar'
import CardCity from '../components/CardCity'
import FooterP from "../components/Footer"
import Itinerary from "../components/Itinerary"


export default class City extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <NavBarP className="navCity-bg"/>
                    <div className="bgCity ">
                    <CardCity />
                    <Itinerary/>
                    <FooterP />
                    </div>
                </div>
            </div>
        )
    }
}
