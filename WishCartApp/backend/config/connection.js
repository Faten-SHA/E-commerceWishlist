const mongoose = require("mongoose");
const URI = process.env.MONGO_URI;

// ---DATABASE CONNECTION (async)---
//connection between express and atlas

main().then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(URI);


}

module.exports = mongoose;

