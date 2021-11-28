const Router =require("express").Router()
const citiesController = require("../controllers/citiesController")


Router.route('/cities')
.get(citiesController.returnCities)

Router.route('/city/:id')
.get(citiesController.returnCity)

module.exports = Router