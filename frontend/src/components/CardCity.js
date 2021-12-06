import {Link, useParams} from 'react-router-dom'
import citiesActions from '../redux/actions/citiesActions'
import { connect } from 'react-redux'
import Itinerary from './Itinerary'
import {useEffect} from "react"

function CardCity (props) {
    const params = useParams()

    useEffect(() => {
        !props.cities[0] && props.getCities() 
        props.cities[0] && props.findCity(props.cities, params.id)
        props.getItinerariesById(params.id)
    }, [props.cities]) 
    
    return (
        <div >
        <div className="mainCity ">
        <div className="cityImg">
        <img className="imgOnly" key={props.city._id} alt={props.city.name} src={`.${props.city.src}`} />
        </div>
        <div className="cityConteiner">
        <h1 className="countryTitle">{props.city.name}, {props.city.country}</h1>
        <p className="descriptionCity">{props.city.description}</p>
        </div>
         
        {props.itineraries.length > 0 ?
        (
        <Itinerary itineraries={props.itineraries} />    
        ) :
        (
            <h1>UNDER CONSTRUCTION</h1>
        )} 
        <div className="buttons-back">
        <Link to="/cities" className="backCities"> Back to Cities</Link>
        <Link to="/" className="backCities"> Back to Home</Link>
        </div>
        </div>
        </div>
    )
}

const mapDispatchToProps = {
    findCity: citiesActions.findCity,
    getCities: citiesActions.getCities,
    getItinerariesById: citiesActions.getItinerariesById
}

const mapStateToProps = (state) => {
    return {
        cities: state.citiesReducer.cities,
        city: state.citiesReducer.city,
        itineraries: state.citiesReducer.itineraries
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardCity)
