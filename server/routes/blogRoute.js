const express = require("express");

const router = express.Router();

const blogController = require("../controllers/blogController");


router.get("/", blogController.postList);
router.post("/:slug/update", blogController.postUpdate);
router.get("/:slug", blogController.postDetail);
// router.post("/:slug", blogController.postUpdate);

module.exports = router;