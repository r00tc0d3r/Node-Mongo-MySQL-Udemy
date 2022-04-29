const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const StorageScheme = new mongoose.Schema(
  {
    // Estructura del objeto
    url: {
      type: String,
    },
    filename: {
      type: String,
    },
  },
  {
    timestamps: true, //TODO: createdAt, updatedAt
    versionKey: false,
  }
);
// Soft Delete mongoose
StorageScheme.plugin(mongooseDelete, { overrideMethods: "all" });
// Exportando el modelo de mongoose ("nombre de tabla", scheme);
module.exports = mongoose.model("storages", StorageScheme);
