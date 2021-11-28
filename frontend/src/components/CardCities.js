import React, {useEffect, useState} from 'react'
import '../pages/cities'
import {Link, useParams} from 'react-router-dom'

function CardCities () {
   const [ciudades, setCiudades] = useState([])
   const params = useParams()

    useEffect(()=>{
        fetch ("http://localhost:4000/api/cities")
       .then (res => res.json())
       .then (data => setCiudades(data.response.ciudades))
       .catch(err => console.log(err.message))
    }, [])

    return(
        <div>
            <div className="contenedor-ciudades">
                <div className="card-ciudad">
                    {ciudades.map(ciudad => {
                        return (
                            <Link to={`/city/${ciudad.id}`}>
                            <div className="card-imagen">
                            <img className="imagen" key={ciudad.id} alt={ciudad.name} src={ciudad.src} />
                            <p>{ciudad.name}</p>
                            </div>
                            </Link> 
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardCities
