const bcryptjs = require("bcryptjs");

/**
 * Contraseña sin encriptar
 * @param {*} passwordPlain
 */
const encrypt = async (passwordPlain) => {
  const hash = await bcryptjs.hash(passwordPlain, 10);
  return hash;
};

/**
 * Pasar contraseña sin encriptar y hash
 * @param {*} passwordPlain
 * @param {*} hashedPassword
 */
const compare = async (passwordPlain, hashedPassword) => {
  return await bcryptjs.compare(passwordPlain, hashedPassword);
};

module.exports = { encrypt, compare };
