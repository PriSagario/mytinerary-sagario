import React from "react"
import NavBarP from '../components/Navbar'
import  CarouselP from "../components/Carousel"
import  FooterP from "../components/footer"
import  HeroP from "../components/Hero"

export default class Home extends React.Component{
    render(){
        return (
         <div className= "bg-light container-fluid p-0">
         <NavBarP />
         <div  className="bg-image d-flex justify-content-center flex-column">
         <HeroP />
         </div>
         <CarouselP />
         <FooterP />


        </div>
        )
    }
}

