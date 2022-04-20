const express = require("express");
const { getItems, getItem, createItem } = require("../controllers/tracks");
const router = express.Router();

// TODO: http://localhost:PORT/tracks GET, POST, DELETE, PUT

router.get("/", getItems);
router.post("/", createItem);
router.get("/:id", getItem);

module.exports = router;
