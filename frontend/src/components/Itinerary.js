import { Card } from "react-bootstrap"
import { useEffect, useState } from "react"
import { AiOutlineHeart } from "react-icons/ai"
import { AiOutlineDollarCircle } from "react-icons/ai"
import { connect } from 'react-redux'
import activitiesActions from "../redux/actions/activitiesActions"
import itinerariesActions from "../redux/actions/itinerariesActions"

function Itinerary(props) {
    const heart = <AiOutlineHeart />
    const plata = <AiOutlineDollarCircle />

    const [display, setDisplay] = useState(false)
    const handleClick = () => {
        setDisplay(!display)
        props.getActivities(props.itinerary._id)
    }

    useEffect(() => {
        !props.activities && props.getActivities(props.itinerary._id)
    }, [props.activities])

    function money(price) {
        return Array.from({ length: price })
    }
    console.log(props)
    return (

        <div className="itinerariesAll">
            {props.itinerary && 
            (<Card className="card-iti">
                <Card.Header>{props.itinerary.title}</Card.Header>
                <Card.Body className="conteinerCardBody">
                    <div className="card-iti-content">
                        <div className="user">
                            <img className="image-card-iti" variant="top" alt='card_city' src={props.itinerary.src} />
                            <p className="name-only">{props.itinerary.name}</p>
                        </div>
                        <div className="body-content">
                            <div className="itinerary-text">
                                <span> Duration : {props.itinerary.duration}hs</span>
                            </div>
                            
                            <div className="likes-itinerary" onClick={() => props.likes(props.user._id, props.itinerary._id, props.cityId)} >
                                <span className="corazon">{heart}</span><span className="numero-like" >{props.itinerary.likes.length}</span>
                            </div>
                            <div className="macaGrax">
                                <p>Price: </p>
                                {money(props.itinerary.price).map((index) => (
                                    <span key={index + 1} className="cash">{plata}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hashtags">
                        {props.itinerary.hashtags.map((hash) => (
                            <div className="tag"> #{hash}</div>
                        ))}
                    </div>

                    <div className='buttonViewMore'>
                        <button onClick={handleClick} className="btn-warning">
                            {" "}
                            {display ? "View less" : "View more"}

                        </button>
                        {display && (
                            props.activities[0] && props.activities.map(activity => {
                                if (activity.itinerary._id === props.itinerary._id) {
                                    return (
                                        <div className="activity">
                                            <div className="activityPic" style={{ backgroundImage: `url("${activity.image}")` }}>
                                                <h5>{activity.title}</h5>
                                            </div>
                                        </div>
                                    )
                                }
                            }
                            )
                        )}

                    </div>



                </Card.Body>
            </Card>)
}

        </div>
    )
}

const mapDispatchToProps = {
    getActivities: activitiesActions.getActivities,
    likes: itinerariesActions.likes
}

export default connect(null, mapDispatchToProps)(Itinerary)