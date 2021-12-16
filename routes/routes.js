const Router = require("express").Router()
const citiesController = require("../controllers/citiesController")
const itineraryController = require("../controllers/itineraryController")
const authControllers = require("../controllers/authControllers")
const validator = require('../config/validator')
const passport = require('../config/passport')
const activitiesControllers = require('../controllers/activitiesControllers')

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
.get(itineraryController.returnItinerary)
.delete(itineraryController.deleteItinerary)
.put(itineraryController.modifyItinerary)

Router.route("/itineraries/:city")
.get(itineraryController.returnItinerariesByCity)

Router.route('/auth/signUp')
.post(validator, authControllers.signUpUser)
.get(authControllers.readUsers)

Router.route('/auth/signIn')
.post(authControllers.signInUser)

Router.route('/auth')
.get(passport.authenticate('jwt',{ session: false}), authControllers.checkearToken) 

Router.route('/activities')
.post(activitiesControllers.postActivity)
.get(activitiesControllers.returnActivities)

Router.route('/activities/:id')
.get(activitiesControllers.returnActivity)
.post(activitiesControllers.postActivity)
.put(activitiesControllers.modifyActivity)
.delete(activitiesControllers.deleteActivity)

Router.route('/activity/:itinerary')
.get(activitiesControllers.returnActivitiesByItinerary)


module.exports = Router