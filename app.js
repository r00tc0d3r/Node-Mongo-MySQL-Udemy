require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`App Ready in http://localhost:${port}`);
});
dbConnect();
