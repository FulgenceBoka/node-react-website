const express = require("express");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
	res.send("Bonjour le monde");
});

app.listen(PORT, () =>
	console.log(
		`
		-------------
		server runnig port ${PORT}
		-------------`
	)
);
