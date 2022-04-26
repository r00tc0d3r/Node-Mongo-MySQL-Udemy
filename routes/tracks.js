const express = require("express");
const { getItems, getItem, createItem } = require("../controllers/tracks");
const router = express.Router();
const { validatorCreateItem } = require("../validators/tracks");
const customHeader = require("../middleware/customHeader");

// TODO: http://localhost:PORT/tracks GET, POST, DELETE, PUT

router.get("/", getItems);
router.post("/", validatorCreateItem, customHeader, createItem);
router.get("/:id", getItem);

module.exports = router;
