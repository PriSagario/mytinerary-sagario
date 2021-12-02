const Router =require("express").Router()
const citiesController = require("../controllers/citiesController")


Router.route('/cities')
.get(citiesController.readCities)
.post(citiesController.createCity)

Router.route('/city/:id')
.get(citiesController.readCity)
.post(citiesController.createCity)
.delete(citiesController.deleteCity)
.put(citiesController.modifyCity)

module.exports = Router