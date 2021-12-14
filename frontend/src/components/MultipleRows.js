import { useEffect} from "react";
import Slider from "react-slick";
import {Card, Container} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import {connect} from 'react-redux';
import citiesActions from "../redux/actions/citiesActions";

function MultipleRows(props) {
  useEffect(() => {
    props.getCities()}, [])

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "20px",
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
      <h1 className="popular">Popular MyTineraries</h1>
      <Container>
      <Slider {...settings} >
                {props.cities.length > 0 && props.cities.map((city, index) => {
                  if (index<12){
                    return (
                        <div key={index} className="tarjetass">
                            <Card className="mt-2 tarjeta">
                                <Card.Img className="tarjeta-img"
                                    variant="top"
                                    src={city.src}
                                />
                                <Card.Body>
                                    <Card.Title className="titleMR">
                                        {city.name}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    );
                  }
                })}
            </Slider>
      </Container >
    </div>
  );
}

const mapDispatchToProps = {
   getCities: citiesActions.getCities
}

const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities,
}
}

export default connect(mapStateToProps, mapDispatchToProps)
  (MultipleRows);