import React from "react"
import NavBarP from '../components/NavBar'
import ActionCall from "../components/ActionCall"
import  CarouselP from "../components/Carousel"
import  FooterP from "../components/footer"
import  HeroP from "../components/Hero"

export default class Home extends React.Component{
    render(){
        return (
         <div className= "bg-dark container-fluid">
         <NavBarP />
         {/*<HeroP />*/}
         <ActionCall />
         <CarouselP />
         <FooterP />


        </div>
        )
    }
}

