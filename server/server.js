const express = require("express");
require("dotenv").config();

const blogRoute = require("./routes/blogRoute");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/", (req, res) => {
	res.send("Bonjour le monde");
});

app.use("/articles", blogRoute);

app.listen(PORT, () =>
	console.log(
		`
		-------------
		server runnig port ${PORT}
		-------------`
	)
);
