const Router =require("express").Router()
const citiesController = require("../controllers/citiesController")
const itineraryController = require("../controllers/itineraryController")
const authControllers = require("../controllers/authControllers")

Router.route('/cities')
.get(citiesController.readCities)
.post(citiesController.createCity)

Router.route('/city/:id')
.get(citiesController.readCity)
.post(citiesController.createCity)
.delete(citiesController.deleteCity)
.put(citiesController.modifyCity)

Router.route('/itinerary')
.get(itineraryController.returnItineraries)
.post(itineraryController.createItinerary)

Router.route('/itinerary/:id')
.get(itineraryController.returnItineraries)
.post(itineraryController.createItinerary)
.delete(itineraryController.deleteItinerary)
.put(itineraryController.modifyItinerary)

Router.route("/itineraries/:city")
.get(itineraryController.returnItinerariesByCity)

Router.route('/auth/signUp')
.get(authControllers.postUser)
.get(authControllers.readUsers)


module.exports = Router