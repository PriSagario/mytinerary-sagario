import {useState} from 'react'
import { Button, Card, Collapse } from 'react-bootstrap'


export default function Itinerary(props) {
      const [open, setOpen] = useState(false)   

    function money(price) {
        return Array.from({ length: price })
    }
    console.log(props.itineraries)
    return (
        <div className="itinerariesAll">
           {props.itineraries &&
                props.itineraries.map((itinerary, index) => (
                    <Card key={index} className="card-iti">
                        <Card.Header>{itinerary.title}</Card.Header>
                        <Card.Body>
                            <div className="user">
                                <img className="image-card-iti" variant="top" src={itinerary.src} />
                                <p>{itinerary.name}</p>
                            </div>
                            <div className="itinerary-text">
                                <span> Duration : {itinerary.duration}hs</span>
                                <div className="macaGrax">
                                <p>Price : </p>
                                {money(itinerary.price).map(() => (
                                    <span>💵</span>
                                ))}
                                </div>
                                <div>
                                {itinerary.hashtags.map((hash) => (
                                    <div className="tag"> #{hash}</div>
                                ))}
                                <Button
                                    className="btn-warning p-1 fs-6 fw-normal m-1 button-VM"
                                    onClick={() => setOpen(!open)}
                                    aria-controls="example-fade-text"
                                    aria-expanded={open}
                                >
                                    {!open ? "View more" : "View less"}
                                </Button>
                                <Collapse in={open}>
                                    <div id="example-collapse-text">
                                    Under Construction....
                                    </div>
                                </Collapse>

                            </div>
                        </div>
                        </Card.Body>
                    </Card>))} 

        </div>
    )
}
