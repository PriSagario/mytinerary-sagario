import {Link, useParams} from 'react-router-dom'
import citiesActions from '../redux/actions/citiesActions'
import { connect } from 'react-redux'
import Itinerary from '../components/Itinerary'


function CardCity (props) {
    !props.cities[0] && props.getCities()
    const params = useParams()
    props.cities[0] && props.findCity(props.cities, params.id)

    return (
        <div className="bgCity ">
        <div className="mainCity ">
        <div className="cityImg">
        <img className="imgOnly" key={props.auxiliar._id} alt={props.auxiliar.name} src={`.${props.auxiliar.src}`} />
        </div>
        <div className="cityConteiner">
        <h1 className="countryTitle">{props.auxiliar.name}, {props.auxiliar.country}</h1>
        <p className="descriptionCity">{props.auxiliar.description}</p>
        </div>
        <Itinerary/>
         <Link to="/cities" className="backCities"> Back to Cities</Link>
         <h2 className="underConst">Under construction</h2>
        </div>
        </div>
    )
}

const mapDispatchToProps = {
    findCity: citiesActions.findCity,
    getCities: citiesActions.getCities,
}

const mapStateToProps = (state) => {
    return {
        cities: state.citiesReducer.cities,
        auxiliar: state.citiesReducer.auxiliar,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardCity)
