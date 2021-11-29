import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBarP from '../components/Navbar'
import FooterP from '../components/footer'

export default function City() {
    const [ciudad, setCiudad] = useState([])
    const params = useParams()

    useEffect(() => {
        fetch("http://localhost:4000/api/city/" + params.id)
            .then(res => res.json())
            .then(data => setCiudad(data.response))
            .catch(err => console.log(err.message))
    }, [])
    return (
        <div className="bgCity">
        <div className="main">
            <NavBarP />
        <div className="cityImg">
        <img className="imgOnly" key={ciudad._id} alt={ciudad.name} src={`../${ciudad.src}`} />
        
        </div>
        <div className="cityConteiner">
        <h1 className="nameCity">{ciudad.name}, {ciudad.country}</h1>
        <p className="descriptionCity">{ciudad.description}</p>
         <h2 className="underConst">Under construction</h2>
         <Link to="/cities" className="backCities">Back to Cities</Link>
        </div>
        <FooterP />
        </div>
        </div>
    )
}