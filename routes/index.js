// Iniciamos las rutas de nuestro servidor/API
const express = require('express');
const api = express.Router();
const usermiddleware = require('../middleware/user.js');

// Ruta solo accesible si estás autenticado
api.get('/private',usermiddleware, (req, res) => {
	res.status(200).send({message: 'Tienes Acceso'})
});

//Peticiones
api.get('/',function(req, res){
	res.render("");
});

module.exports = api