require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const users = require("../models/userModel");

module.exports.signup = async (req, res) => {
	const hashedPassword = await bcrypt.hash(req.body.password, 10);

	const userData = {
		username: req.body.username,
		email: req.body.email,
		password: hashedPassword,
	};

	try{
		users.signup(userData, (user) => {
		if (user.errors)
			return res.status(500).json({ errors: { message: "Ce nom existe déjà!" } });

		res.redirect('/signin');
	});
	}
	catch(err) {
		res.json({errors: { message: err } })
	}
	
};

module.exports.signin = async (req, res) => {
	const { email, password } = req.body;

	users.signin(email, async (user) => {
		if (!user)
			return res.json({ errors: { message: "Ce compte n'existe pas!" } });

		const passwordIsValid = await bcrypt.compare(password, user.password);

		if (!passwordIsValid)
			return res.json({ errors: { message: "Ce compte n'existe pas!" } });

		delete user.password;


		const ACCESS_TOKEN = jwt.sign(
			{ id: user.user_id },
			process.env.ACCESS_TOKEN,
			{ expiresIn: '3600s' }
		);

		// const REFRESH_TOKEN = jwt.sign(

		// 		{username:user.username},
		// 		process.env.REFRESH_TOKEN,
		// 		{ expiresIn: 12 * 30 * 24 * 60 * 60 * 1000 }

		// 	)

		res.cookie('jwt', ACCESS_TOKEN)

		res.json({
			errors: {
				user: user,
				message: `${user.username} est connecté`,
				access_token: ACCESS_TOKEN,
			},
		});
	});
};
