import {Link, useParams} from 'react-router-dom'
import citiesActions from '../redux/actions/citiesActions'
import itinerariesAction from '../redux/actions/itinerariesActions'
import { connect } from 'react-redux'
import Itinerary from './Itinerary'
import {useEffect} from "react"
import NavBarP from './Navbar'

function CardCity (props) {
    const params = useParams()

    useEffect(() => {
        !props.cities[0] && props.getCities() 
        props.cities[0] && props.findCity(props.cities, params.id)
        props.getItinerariesById(params.id)
    }, [props.cities]) 
    
    console.log(props)
    const backgroundCity = {
        backgroundImage: "url(" + `.${props.city.src}` + ")"
    }

    return (
        <div >
            <div className="navCityBg" style={backgroundCity} >
                <NavBarP />
            </div>
        <div className="mainCity ">
        <div className="cityImg">
        </div>
        <div className="cityConteiner">
        <h1 className="countryTitle">{props.city.name}, {props.city.country}</h1>
        <p className="descriptionCity">{props.city.description}</p>
        </div>
        <h1 className="itineraries-title">ITINERARIES</h1>
        {props.city ? (
                    props.itineraries.length > 0 
                    ? (props.itineraries.map((itinerary, index)=>
                    <Itinerary key={index} itinerary={itinerary} cityId={params.id} user={props.user} activities={props.activities} />)) : 
                    (
                    <h2 className="noItiMess">There are not itineraries for this city yet...</h2>
                    )): ""
            }
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
    getItinerariesById: itinerariesAction.getItinerariesById
}

const mapStateToProps = (state) => {
    return {
        cities: state.citiesReducer.cities,
        city: state.citiesReducer.city,
        itineraries: state.itinerariesReducer.itineraries,
        user: state.authReducer.user,
        activities: state.activitiesReducer.activities,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardCity)
