import React from "react"
import NavBarP from '../components/Navbar'
import SignInP from "../components/SignIn"
import FooterP from "../components/Footer"


export default class SignIn extends React.Component {
    render() {
        return (
            <div className="backgroundCities ">
                <div>
                    <NavBarP />
                    <SignInP />
                    <FooterP />
                </div>
            </div>
        )
    }
}