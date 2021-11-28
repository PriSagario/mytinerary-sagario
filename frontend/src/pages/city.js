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
        <div className="main">
            <NavBarP />
        <div className="card-imagen">
        <img className="imagen" key={ciudad._id} alt={ciudad.name} src={`../${ciudad.src}`} />
        <p className="nameCity">{ciudad.name}</p>
        <p className="descriptionCity">{ciudad.description}</p>
        </div>
        <div>
        <Link to="/cities">Back to Cities</Link>
         <h1>Under construction</h1>
        </div>
        <FooterP />
        </div>
    )
}