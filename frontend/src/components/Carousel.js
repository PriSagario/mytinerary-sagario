import { Carousel, CarouselItem, Row, Card, Col } from 'react-bootstrap';
import "../style.css"

const CarouselP = () => {

    const allCities = [
        [
            {city: "Agra", country: "India", image:"cityAgra.jpg"},
            {city: "Cusco", country: "Peru", image:"cityCusco.jpg"},
            {city: "London", country: "England", image:"cityLondon.jpg"},
            {city: "Misiones", country: "Argentina", image:"cityMisiones.jpg"},
        ],
        [
            {city: "Bali", country: "Indonesia", image:"cityBali.jpg"},
            {city: "Dubai", country: "United Arab Emirates", image:"cityDubai.jpg"},
            {city: "Orlando", country: "United States", image:"cityOrlando.jpg"},
            {city: "Paris", country: "France", image:"cityParis.jpg"},
        ],
        [
            {city: "Phi-Phi", country: "Thailand", image:"cityPhiPhi.jpg"},
            {city: "Rio de Janeiro", country: "Brazil", image:"cityRio.jpg"},
            {city: "Sidney", country: "Australia", image:"citySidney.jpg"},
            {city: "Tokyo", country: "Japan", image:"cityTokyo.jpg"},
        ],
    ]

    
    return (
         <>
            <h2 className="carousel_title"> POPULAR ITINERARY</h2>
            <Carousel className="carouselComp">
                {allCities.map((arrayCity) => {
                    return (
                        <Carousel.Item interval={1000}>
                            <Row xs={1} md={2} className="g-4">
                                {arrayCity.map((city) => {
                                    let allImages = `../assets/cities/${city.image}`
                                    return (
                                    <Col className= "d-flex justify-content-center">
                                        <Card className="allCards cardPrueba">
                                            <Card.Img className= "cardImg" variant="top" src={allImages} />
                                            <Card.Body className= "bodyOfCard">
                                                <Card.Title>{city.city}</Card.Title>
                                                <Card.Text>
                                                    {city.country}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )})}
                            </Row>
                        </Carousel.Item>
                    )
                }
                )}
            </Carousel>
        </>
    );
}; 

export default CarouselP 