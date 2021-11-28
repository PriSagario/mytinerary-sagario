const Router =require("express").Router()
const citiesController = require("../controllers/citiesController")


Router.route('/cities')
.get(citiesController.readCities).post(citiesController.createCity)
.post(cityController.loadCities)

Router.route('/city/:id')
.get(citiesController.readCity)
.put(cityController.modifyCities)

module.exports = Router