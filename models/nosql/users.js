const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema(
  {
    // Estructura del objeto
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    role: {
      type: ["user", "admin"], // solo dos opciones
      default: "user", // valor por defecto
    },
  },
  {
    timestamps: true, //TODO: createdAt, updatedAt
    versionKey: false,
  }
);

// Exportando el modelo de mongoose ("nombre de tabla", scheme);
module.exports = mongoose.model("users", UserScheme);
