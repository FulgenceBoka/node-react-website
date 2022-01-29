const express = require("express");
require("dotenv").config();

const courseRoute = require("./routes/courseRoute");
const blogRoute = require("./routes/blogRoute");
const userRoute = require("./routes/userRoute");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Bonjour le monde");
});

app.use("/courses", courseRoute);
app.use("/articles", blogRoute);
app.use("/user", userRoute);

app.listen(PORT, () =>
	console.log(
		`
		-------------
		server runnig http://localhost:${PORT}/
		-------------`
	)
);
