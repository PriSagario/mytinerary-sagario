import '../pages/cities'
import { Link} from 'react-router-dom'
import citiesActions from '../redux/actions/citiesActions'
import {connect} from 'react-redux'

function CardCities(props) {
    !props.cities[0] && props.getCities()
    return (
        <div className="pageCities ">
        <div className="pagePad ">
            <div className="searcher">
            <input className="inputFilter"
                onChange={(e) => 
                props.filterCities(props.cities, e.target.value.toLowerCase().trimStart().trimEnd())
                }
                type="text"
                id="header-search"
                placeholder="Search a City"
                name="s"
            />
            </div>
            <div className="contenedor-ciudades">
                <div className="card-ciudad">

                     {props.cities.length > 0 ? (
                     props.auxiliar.length > 0 ? (
                        props.auxiliar.map(ciudad => {
                        return (
                            <Link to={`/city/${ciudad._id}`} className="linkCity">
                                <div className="card-imagen">
                                    <img className="imagen" key={ciudad._id} alt={ciudad.name} src={ciudad.src} />
                                    <p className="nameCity">{ciudad.name}</p>
                                </div>
                            </Link>
                        )
                    }
                    )) : (<h1 className="textErr">No cities available for your search</h1>)) :
                    <h1>Loading...</h1>
                }
                </div>
            </div>
        </div>
        </div>
    )
}

const mapDispatchToProps = {
    filterCities: citiesActions.filterCities,
    getCities: citiesActions.getCities,
}

const mapStateToProps = (state) => {
    return {
        auxiliar: state.citiesReducer.auxiliar,
        cities: state.citiesReducer.cities,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardCities)
