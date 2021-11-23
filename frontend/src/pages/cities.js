import React from "react"
import NavBarP from '../components/navbar'
import  FooterP from "../components/footer"


export default class Home extends React.Component{
    render(){
        return (
         <div className= "bg-dark container-fluid">
         <NavBarP />
         <FooterP />


        </div>
        )
    }
}