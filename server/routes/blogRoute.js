const express = require("express");

const router = express.Router();

const blogController = require("../controllers/blogController");


router.get("/", blogController.postList);
router.post("/:slug/update", blogController.postUpdate);
// router.get("/:slug/update", blogController.getUpdate);
router.post("/:slug/delete", blogController.postDelete);
router.get("/:slug", blogController.postDetail);

module.exports = router;