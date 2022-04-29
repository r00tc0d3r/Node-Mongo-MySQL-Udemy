const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { validatorGetItem } = require("../validators/storage");
const {
  createItem,
  getItem,
  getItems,
  deleteItem,
} = require("../controllers/storage");

//TODO: http://localhost:3001/api/storage
/**
 * Lista de items
 */
router.get("/", getItems);
/**
 * Detalle de item
 */
router.get("/:id", validatorGetItem, getItem);
/**
 * Eliminar Item
 */
router.delete("/:id", validatorGetItem, deleteItem);
/**
 * Crear Item
 */
router.post("/", uploadMiddleware.single("myfile"), createItem);

module.exports = router;
