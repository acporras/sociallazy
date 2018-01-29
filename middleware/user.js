const services = require('../services/index');

function ensureAuthenticated(req, res, next) {
  if(!req.headers.authorization) {
    var params = new Object();
    params.code = 'ERROR'
    params.message = 'Tu petición no tiene cabecera de autorización'
    params.response = {}
    return res
      .status(200)
      .send(params);
  }
  const token = req.headers.authorization.split(" ")[1];
  
  services.decodeToken(token)
    .then(response =>{
      req.user = response
      next()
    })
    .catch(response =>{
      res.status(response.transactionResponse.status)
    })
}
module.exports = ensureAuthenticated