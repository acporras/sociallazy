// config.js
module.exports = {
	port: process.env.PORT || 3000,
	host: process.env.HOST || 'localhost',
	db: process.env.MONGODB_URI || 'mongodb://localhost/bdslog',
 	TOKEN_SECRET: process.env.TOKEN_SECRET || "tokenaccess",
 	BCRYPT_SALT_ROUNDS: 12
};