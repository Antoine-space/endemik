const path = require("path");
require('dotenv').config()
const express = require("express");
const initRoutes = require("./src/route")

const app = express();
const port = process.env.PORT || 3000;

let publicDirPath = path.join(__dirname, "./public");
app.use(express.static(publicDirPath));

app.set("views", path.join(__dirname, "./vues"));
app.set("view engine", "ejs");

initRoutes(app)

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
