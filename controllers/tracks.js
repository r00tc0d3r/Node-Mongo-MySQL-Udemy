const { tracksModel } = require("../models");

/**
 * Obtener lista de la DB
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  const data = await tracksModel.find({});
  res.send({ data });
};

/**
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => {};

/**
 *
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  const { body } = req;
  const data = await tracksModel.create(body);
  res.send({ data });
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
const updateItem = (req, res) => {};

/**
 *
 * @param {*} req
 * @param {*} res
 */
const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
