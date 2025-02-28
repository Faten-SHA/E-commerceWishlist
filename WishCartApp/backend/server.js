const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connection = require("./config/connection");
const WishItem = require("./models/wishItemModel");
const wishItemRoutes = require("./routes/wishItemRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

//middleware --- json parser
app.use(express.json());
app.use(cors());

//route prefix
app.use("", wishItemRoutes );

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
