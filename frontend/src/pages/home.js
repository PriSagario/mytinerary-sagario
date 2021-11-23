import React from "react"
import NavBarP from '../components/navbar'
import ActionCall from "../components/ActionCall"
import  CarouselP from "../components/Carousel"
import  FooterP from "../components/footer"
import  HeroP from "../components/Hero"

export default class Home extends React.Component{
    render(){
        return (
         <div className= "bg-dark container-fluid">
         <NavBarP />
         <div  className="bg-image d-flex justify-content-center flex-column">
         <HeroP />
         <ActionCall />
         </div>
         <CarouselP />
         <FooterP />


        </div>
        )
    }
}

