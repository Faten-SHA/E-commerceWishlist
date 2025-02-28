const express = require("express");
//const mongoose = require("mongoose");
const cors = require("cors");
const connection = require("./config/connection");
const WishItem = require("./models/wishItemModel");
const app = express();
const PORT = process.env.PORT || 3000;

//middleware --- json parser
app.use(express.json());
app.use(cors());

//route prefix
//app.use("", require("./routes/routes.js"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
