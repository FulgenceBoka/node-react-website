const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateJWT = (req, res, next) => {
	const authHeader = req.headers.cookie;

	if (!authHeader) return res.sendStatus(403);

	const cookieJWT = req.headers.cookie.split("=")[0];
	const token = req.headers.cookie.split("=")[1];

	if (cookieJWT!=='jwt') return res.sendStatus(403);

	if (!token) return res.sendStatus(401);

	jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
		if (err) return res.sendStatus(403);
		req.user = user.id;
		next();
	});
};

module.exports = authenticateJWT;
