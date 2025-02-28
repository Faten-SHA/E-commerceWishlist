const express = require("express");
const router = express.Router();
    const { getWishItems ,createWishItem, updateWishItem, deleteWishItem } = require("../controllers/wishItemController");


    router.get("/wishItems", getWishItems);
    router.post("/wishItems/create", createWishItem);
    router.put("/wishItems/update/:id", updateWishItem);
    router.delete("/wishItems/delete/:id", deleteWishItem);


module.exports = router;