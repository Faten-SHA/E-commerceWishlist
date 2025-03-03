import React, { useState , useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import WishItemsList from "./WishItemsList";
import "./WishCartAddForm.css";

function WishCartAddForm() {
  const [wishItemName, setWishItemName] = useState("");
  const [wishItemPrice, setWishItemPrice] = useState("");
  const [wishItemDescription, setWishItemDescription] = useState("");
  const [wishItemURL, setWishItemURL] = useState("");
  const [wishItemImage, setWishItemImage] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemPriority, setItemPriority] = useState("");
  const [isPurchased, setIsPurchased] = useState(false);
  

  console.log("wishItemName :", wishItemName);

  const addWishItemForm = async (e) => {
    e.preventDefault();
    const newWishItem = {
      wishItemName,
      wishItemPrice,
      wishItemDescription,
      wishItemURL,
      wishItemImage,
      wishItemCategory: itemCategory,
      wishItemPriority: itemPriority,
      isPurchased,
    };
    //console.log(newWishItem);

    try {
        if (window.confirm("Are you sure you want to add this item?")) {
      const response = await axios.post(
        "http://localhost:5000/wishItems/create",
        newWishItem
      );
    //   console.log("response.data is :",response.data);

      alert(response.data.msg);
      WishItemsList();
    }
    } catch (error) {
      console.error("There was an error adding the item!", error);
      alert(error.response.data.error);
    }
  };
  return ( <>
    <div>
    <h2>Add a new item to your wish list</h2>
    </div>
    <div className="form-container">
   
      <Form onSubmit={addWishItemForm} className="wish-form">
        <Form.Group className="mb-3">
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            value={wishItemName}
            onChange={(e) => setWishItemName(e.target.value)}
            type="text"
            name="wishItemName"
            placeholder="Enter Item Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Item Price</Form.Label>
          <Form.Control
            value={wishItemPrice}
            onChange={(e) => setWishItemPrice(e.target.value)}
            type="number"
            name="wishItemPrice"
            placeholder="Enter Item Price"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Item Description</Form.Label>
          <Form.Control
            value={wishItemDescription}
            onChange={(e) => setWishItemDescription(e.target.value)}
            type="text"
            name="wishItemDescription"
            placeholder="Enter Item Description"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Item URL</Form.Label>
          <Form.Control
            value={wishItemURL}
            onChange={(e) => setWishItemURL(e.target.value)}
            type="text"
            name="wishItemURL"
            placeholder="Enter Item URL"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Item Image URL</Form.Label>
          <Form.Control
            value={wishItemImage}
            onChange={(e) => setWishItemImage(e.target.value)}
            type="text"
            name="wishItemImage"
            placeholder="Enter Item Image URL"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Item Category</Form.Label>
          <Form.Select
            aria-label="Item Category"
            name="itemCategory"
            value={itemCategory}
            onChange={(e) => setItemCategory(e.target.value)}
          >
            <option>Open this select menu</option>
            <option value="Home&Living">🏡 Home & Living </option>
            <option value="Tech&Gadgets">📱 Tech & Gadgets </option>
            <option value="Fashion&Apparel">👗 Fashion & Apparel </option>
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Select
            aria-label="Item Priority"
            name="itemPriority"
            value={itemPriority}
            onChange={(e) => setItemPriority(e.target.value)}
          >
            <option>Open this select menu</option>
            <option value="NeedItNow">Need It Now! 🚀</option>
            <option value="WouldBeNice">Would Be Nice 🎯</option>
            <option value="MaybeSomeday">Maybe Someday 🤔</option>
          </Form.Select>
        </Form.Group>

        <Form.Group>
          {/* checkbox */}
          <Form.Check type="checkbox" label="Is Purchased" value= {isPurchased} onChange={(e) => setIsPurchased(e.target.checked)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Item
        </Button>
      </Form>
    </div>
    </>
  );
}

export default WishCartAddForm;
