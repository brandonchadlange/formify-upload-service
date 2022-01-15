const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use("/api", routes);

app.listen(3000);
