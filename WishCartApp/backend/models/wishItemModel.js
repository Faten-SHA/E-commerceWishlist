const mongoose = require('mongoose');
const wishItemSchema = new mongoose.Schema(
    {
        wishItemName: { type: String, required: true },
        wishItemPrice: { type: Number, required: false },
        wishItemDescription: { type: String, required: false },
        wishItemURL: { type: String, required: true },
        wishItemCategory: { type: String, required: true },
        wishItemPriority: { type: String, required: true },
        isPurchased: { type: Boolean, required: true },
    },
      {
        timestamps: true, 
      },
    );


// Create a model named 'WishItem' using the defined schema
const WishItem = mongoose.model('WishItem', wishItemSchema);

// Export the model
module.exports = WishItem;