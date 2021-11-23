import React from "react"
import NavBarP from '../components/Navbar'
import  FooterP from "../components/footer"


export default class Home extends React.Component{
    render(){
        return (
         <div className= "bg-light container-fluid">
         <NavBarP />
         <h1>Cities</h1>
         <FooterP />


        </div>
        )
    }
}