const express = require("express");

const router = express.Router();

const authenticateJWT = require("../middleware/authenticateJWT")

router.get("/", authenticateJWT, (req, res) => {
	// implement code
	res.send({id:req.user})
});

module.exports = router;
