import React from "react"
import NavBarP from '../components/Navbar'
import  FooterP from "../components/Footer"
import  HeroP from "../components/Hero"
import MultipleRows from "../components/MultipleRows"

export default class Home extends React.Component{
    render(){
        return (
         <div className= "bg-image container-fluid p-0">
         <NavBarP />
         <div  className=" d-flex justify-content-center flex-column">
         <HeroP />
         </div>
         <MultipleRows/>
         <FooterP />

        </div>
        )
    }
}

