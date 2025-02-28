const wishItemModel = require("../models/wishItemModel");

// Get all wish items
module.exports.getWishItems = async (req, res) => {
  try {
    const wishItems = await wishItemModel.find();
    res.status(200).json(wishItems);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve Items" });
  }
};

module.exports.createWishItem = async (req, res) => {
  const { text } = req.body;
  wishItemModel
    .create({ text })
    .then((data) => {
      console.log("Wish Item added successfully", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Failed to add wish item", err);
      return res.status(500).json({ error: "Failed to add wish item" });
    });
};

module.exports.updateWishItem = async (req, res) => {
  const { _id, text } = req.body;
  wishItemModel
    .findByIdAndUpdate(_id, { text })
    .then((data) => {
      console.log("Wish Item updated successfully:", data);
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Failed to update wish item", err);
      res.status(500).json({ error: "Failed to update wish item" });
    });
};

module.exports.deleteWishItem = async (req, res) => {
  const { _id } = req.body;
  wishItemModel
    .findByIdAndDelete(_id)
    .then((data) => {
      console.log("Wish Item deleted successfully:", data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Failed to delete wish item", err);
      res.status(500).json({ error: "Failed to delete wish item" });
    });
};
