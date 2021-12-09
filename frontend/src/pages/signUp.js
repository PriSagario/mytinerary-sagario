import React from "react"
import NavBarP from '../components/Navbar'
import SignUpP from "../components/SignUp"
import FooterP from "../components/Footer"


export default class SignUp extends React.Component {
    render() {
        return (
            <div className="backgroundCities ">
                <div>
                    <NavBarP />
                    <SignUpP />
                    <FooterP />
                </div>
            </div>
        )
    }
}