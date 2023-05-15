const route = require("express").Router();
const bollywood = require("../controllers/bollywood")
const hollywood = require("../controllers/hollywood")
const technology =require("../controllers/technology")
const fitness = require("../controllers/fitness")
const food =require("../controllers/food")
const home =require("../controllers/home")


route.get("/",home)
route.get("/bollywood",bollywood)
route.get("/technology",technology)
route.get("/hollywood",hollywood)
route.get("/fitness",fitness)
route.get("/food",food)

module.exports = route;