const express = require("express");
const { getItems, getItem, createItem } = require("../controllers/tracks");
const router = express.Router();
const { validatorCreateItem } = require("../validators/tracks");

// TODO: http://localhost:PORT/tracks GET, POST, DELETE, PUT

router.get("/", getItems);
router.post("/", validatorCreateItem, createItem);
router.get("/:id", getItem);

module.exports = router;
