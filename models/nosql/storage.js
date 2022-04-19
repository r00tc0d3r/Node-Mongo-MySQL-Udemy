const mongoose = require("mongoose");

const StorageScheme = new mongoose.Schema(
  {
    // Estructura del objeto
    url: {
      type: String,
    },
    filename: {
      type: Number,
    },
  },
  {
    timestamps: true, //TODO: createdAt, updatedAt
    versionKey: false,
  }
);

// Exportando el modelo de mongoose ("nombre de tabla", scheme);
module.exports = mongoose.model("storages", StorageScheme);
