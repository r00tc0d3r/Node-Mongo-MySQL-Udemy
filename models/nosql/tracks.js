const mongoose = require("mongoose");

const TracksScheme = new mongoose.Schema(
  {
    // Estructura del objeto
    name: {
      type: String,
    },
    album: {
      type: Number,
    },
    cover: {
      type: String,
      validate: {
        validator: (req) => {
          return true;
        },
        message: "ERROR_URL",
      },
    },
    artirst: {
      name: {
        type: String,
      },
      nickname: {
        type: String,
      },
      nationality: {
        type: String,
      },
    },
    duration: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
    },
    mediaId: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    timestamps: true, //TODO: createdAt, updatedAt
    versionKey: false,
  }
);

// Exportando el modelo de mongoose ("nombre de tabla", scheme);
module.exports = mongoose.model("tracks", TracksScheme);
