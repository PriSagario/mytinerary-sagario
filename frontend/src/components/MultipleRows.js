import { useEffect, useState } from "react";
import Slider from "react-slick";
import {Card, Container} from "react-bootstrap";
import "slick-carousel/slick/slick.css"

export default function MultipleRows() {

  const [ciudades, setciudades] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/cities")
      .then((res) => res.json())
      .then((data) => setciudades(data.response))
      .catch((err) => err.message);
  }, []);

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "5px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
          rows: 4,
          dots: false,
          arrows: false,
        },
      },
    ],
  }

  return (
    <div className="contenedorSlider">
      <h1 className="Popular">Popular MyTineraries</h1>
      <Container>
      <Slider {...settings} >
                {ciudades.map((city, index) => {
                    return (
                        <div key={index} className="tarjetass">
                            <Card className="mt-2 tarjeta">
                                <Card.Img className="tarjeta-img"
                                    variant="top"
                                    src={city.src}
                                />
                                <Card.Body>
                                    <Card.Title>
                                        {city.name}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    );
                })}
            </Slider>
            {/*<Slider {...settings}>
        {ciudades.map((city, index) =>{
          return(
        
          <Card key={index} border="dark" className="text-white card2">
            <Card.Img className="card-img imgSlider" src={city.src} alt={city.name} />
            <Card.ImgOverlay>
              <Card.Title className="txt-dark txt-title">
                {city.name}
              </Card.Title>
              <Card.Text className="txt-dark txt-description txt-center">
                {city.description}
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
          
          )
        })}
      </Slider>*/}
      </Container >
    </div>
  );
}