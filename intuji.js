const express = require("express");
require("dotenv").config();

const DB = require("./config/connection");
const blogroute = require("./routes/blog");

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use("/api", blogroute);

app.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
  DB();
});
