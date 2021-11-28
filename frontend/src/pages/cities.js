import React from "react"
import NavBarP from '../components/Navbar'
import CardCities from '../components/CardCities'
import  FooterP from "../components/footer"


export default class Cities extends React.Component{
    render(){
        return (
            <div className="backCities">
         <div className= "bg-light container-fluid">
         <NavBarP />
         <div  className="bg-cities d-flex justify-content-center flex-column">
         <h1 className="citiesTitle">Cities</h1>
         </div>
         <CardCities/>
         <FooterP />
        </div>
        </div>
        )
    }
}