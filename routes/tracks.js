const express = require("express");
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/tracks");
const router = express.Router();
const {
  validatorCreateItem,
  validatorGetItem,
} = require("../validators/tracks");
const customHeader = require("../middleware/customHeader");

// TODO: http://localhost:PORT/tracks GET, POST, DELETE, PUT

/**
 * Listar los items
 */
router.get("/", getItems);

/**
 * Obtener detalle de item
 */
router.get("/:id", validatorGetItem, getItem);

/**
 * Crear registro
 */
router.post("/", validatorCreateItem, createItem);

/**
 * Actualizar un registro
 */
router.put("/:id", validatorCreateItem, validatorGetItem, updateItem);
module.exports = router;

/**
 * Actualizar un registro
 */
router.delete("/:id", validatorGetItem, deleteItem);
module.exports = router;
