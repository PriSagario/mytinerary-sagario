import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'

export default function City() {
    const [ciudad, setCiudad] = useState([])
    const params = useParams()

    useEffect(()=>{
        fetch ("http://localhost:4000/api/city/"+ params.id)
       .then (res => res.json())
       .then (data => setCiudad(data.response.city))
       .catch(err => console.log(err.message))
    }, [])
    return (
        <div className="card-imagen">
        <img className="imagen" key={ciudad.id} alt={ciudad.name} src={ciudad.src} />
        <p>{ciudad.name}</p>
        </div>
    )
}