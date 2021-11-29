import React, { useEffect, useState } from 'react'
import '../pages/cities'
import { Link, useParams } from 'react-router-dom'

function CardCities() {
    const [ciudades, setCiudades] = useState([])
    const params = useParams()
    const [search, setSearch] = useState([])
    const [min, setMin] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/api/cities")
            .then(res => res.json())
            .then(data => setCiudades(data.response))
            .catch(err => console.log(err.message))
    }, [])

    const filter = ciudades.filter((city) =>
        city.name.toLowerCase().startsWith(min)
    )

    return (
        <div className="pageCities ">
        <div className="pagePad ">
            <div className="searcher">
            <input className="inputFilter"
                value={search}
                onChange={(e) => {
                setMin(e.target.value.toLowerCase().trimStart().trimEnd())
                setSearch(e.target.value)
                }}
                type="text"
                id="header-search"
                placeholder="Search a City"
                name="s"
            />
            </div>
            <div className="contenedor-ciudades">
                <div className="card-ciudad">

                    {filter.length > 0 ? (filter.map(ciudad => {

                        return (
                            <Link to={`/city/${ciudad._id}`} className="linkCity">
                                <div className="card-imagen">
                                    <img className="imagen" key={ciudad._id} alt={ciudad.name} src={ciudad.src} />
                                    <p className="nameCity">{ciudad.name}</p>
                                </div>
                            </Link>
                        )
                    }
                    )) : (<h1 className="textErr">No cities available for your search</h1>)
                    }
                </div>
            </div>
        </div>
        </div>
    )
}

export default CardCities
