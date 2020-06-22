const express = require('express')
const connection = require('./database/connection')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')


const routes = express.Router()

routes.get('/ongs',OngController.show)
routes.get('/incidents',IncidentController.show)
routes.get('/profile',ProfileController.index)

routes.post('/ongs',OngController.create)
routes.post('/incidents',IncidentController.create)
routes.delete('/incidents/:id',IncidentController.delete)

module.exports = routes