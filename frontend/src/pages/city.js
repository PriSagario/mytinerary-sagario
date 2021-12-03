import React from "react"
import NavBarP from '../components/Navbar'
import CardCity from '../components/CardCity'
import FooterP from "../components/Footer"


export default class City extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <NavBarP />
                    <div className=" d-flex justify-content-center flex-column">
                        <h1>City</h1>
                    </div>
                    <CardCity />
                    <FooterP />
                </div>
            </div>
        )
    }
}
