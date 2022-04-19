require("dotenv").config();
const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());

app.listen(port, () => {
  console.log(`App Ready in http://localhost:${port}`);
});
