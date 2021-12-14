import { useState } from 'react'
import { Card } from 'react-bootstrap'

export default function Itinerary(props) {

    const [display, setDisplay] = useState(false)
    const handleClick = () => setDisplay(!display)

    function money(price) {
        return Array.from({ length: price })
    }

    return (

        <div className="itinerariesAll">
            {props.itineraries &&
                props.itineraries.map((itinerary, index) => (
                    <Card key={itinerary.id} className="card-iti">
                        <Card.Header>{itinerary.title}</Card.Header>
                        <Card.Body className="conteinerCardBody">
                            <div className="card-iti-content">
                                <div className="user">
                                    <img className="image-card-iti" variant="top" alt='card_city' src={itinerary.src} />
                                    <p className="name-only">{itinerary.name}</p>
                                </div>
                                <div className="body-content">
                                    <div className="itinerary-text">
                                        <span> Duration : {itinerary.duration}hs</span>
                                        <div className="macaGrax">
                                            <p>Price: </p>
                                            {money(itinerary.price).map(() => (
                                                <span>💵</span>
                                            ))}
                                        </div>
                                        <div className='likes-itinerary'>
                                            <div>Likes: {itinerary.Likes}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hashtags">
                                    {itinerary.hashtags.map((hash) => (
                                        <div className="tag"> #{hash}</div>
                                    ))}
                                </div>
                                <div className=''>
                                    <button onClick={handleClick} className="btn-warning p-1 fs-6 fw-normal m-1 button-VM">
                                        {display ? "view less" : "view more"}

                                    </button>
                                    {display && (
                                        <h4>Under construction...</h4>
                                    )}
                                </div>


                            </div>
                        </Card.Body>
                    </Card>))}

        </div>
    )
}
