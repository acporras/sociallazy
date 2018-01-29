var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('../config');

function createToken(user){
  const payload = {
    "sub" : user._id,
    "iat" : moment().unix(),
    "exp": moment().add(14, "days").unix(),
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
};

function decodeToken(token){
	var params = new Object();
	params.code = 'ERROR'
	const decoded = new Promise((resolve, reject) =>{
		try{
			const payload = jwt.decode(token, config.TOKEN_SECRET);
			if(payload.exp <= moment().unix()) {
				params.message = 'El token a expirado'
				params.response = {
					status : 401,
					message : 'error'
				}
				reject(params);
			}
			params.code = 'SUCCESS'
			params.message = null
			params.response = {
				payload : payload.sub
			}
			resolve(params);
		}catch(err){
			params.message = err
			params.response = {
				status : 500,
				message: 'Invalid token'
			}
			reject(params);
		}
	});

	return decoded;
}

module.exports = {
	createToken,
	decodeToken
}