import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import "./WishCartAddForm.css";
import WishItemsList from "./WishItemsList";

function EditForm() {
  const [wishItemName, setWishItemName] = useState("");
  const [wishItemPrice, setWishItemPrice] = useState("");
  const [wishItemDescription, setWishItemDescription] = useState("");
  const [wishItemURL, setWishItemURL] = useState("");
  const [wishItemImage, setWishItemImage] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemPriority, setItemPriority] = useState("");
  const [isPurchased, setIsPurchased] = useState(false);
 

  const handleSave = async (e) => {
    e.preventDefault();
    const updatedItem = {
      wishItemName,
      wishItemPrice,
      wishItemDescription,
      wishItemURL,
      wishItemImage,
      wishItemCategory: itemCategory,
      wishItemPriority: itemPriority,
      isPurchased,
    };
    try {
      await axios.put(
        `http://localhost:5000/wishItems/update/${item._id}`,
        updatedItem
      );
      alert("Item updated successfully");
    } catch (error) {
      console.error("Error updating item", error);
      alert("Failed to update item");
    }

    return (
      <div className="form-container">
        <Form onSubmit={handleSave} className="wish-form">
          <Form.Group className="mb-3">
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              value={wishItemName}
              onChange={(e) => setWishItemName(e.target.value)}
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Item Price</Form.Label>
            <Form.Control
              value={wishItemPrice}
              onChange={(e) => setWishItemPrice(e.target.value)}
              type="number"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Item Description</Form.Label>
            <Form.Control
              value={wishItemDescription}
              onChange={(e) => setWishItemDescription(e.target.value)}
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Item URL</Form.Label>
            <Form.Control
              value={wishItemURL}
              onChange={(e) => setWishItemURL(e.target.value)}
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Item Image URL</Form.Label>
            <Form.Control
              value={wishItemImage}
              onChange={(e) => setWishItemImage(e.target.value)}
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Item Category</Form.Label>
            <Form.Select
              value={itemCategory}
              onChange={(e) => setItemCategory(e.target.value)}
            >
              <option value="Home&Living">🏡 Home & Living </option>
              <option value="Tech&Gadgets">📱 Tech & Gadgets </option>
              <option value="Fashion&Apparel">👗 Fashion & Apparel </option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Item Priority</Form.Label>
            <Form.Select
              value={itemPriority}
              onChange={(e) => setItemPriority(e.target.value)}
            >
              <option value="Need It Now">Need It Now! 🚀</option>
              <option value="Would Be Nice">Would Be Nice 🎯</option>
              <option value="Maybe Someday">Maybe Someday 🤔</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Is Purchased"
              checked={isPurchased}
              onChange={(e) => setIsPurchased(e.target.checked)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Save Changes
          </Button>
          <Button variant="secondary" onClick={onSave} className="ms-2">
            Cancel
          </Button>
        </Form>
      </div>
    );
  };
}

export default EditForm;
