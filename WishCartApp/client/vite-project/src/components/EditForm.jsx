// import React, { useState } from "react";
// import { Button, Form } from "react-bootstrap";
// import axios from "axios";
// import "./WishCartAddForm.css";
// import WishItemsList from "./WishItemsList";

// function EditForm() {
//   const [wishItemName, setWishItemName] = useState("");
//   const [wishItemPrice, setWishItemPrice] = useState("");
//   const [wishItemDescription, setWishItemDescription] = useState("");
//   const [wishItemURL, setWishItemURL] = useState("");
//   const [wishItemImage, setWishItemImage] = useState("");
//   const [itemCategory, setItemCategory] = useState("");
//   const [itemPriority, setItemPriority] = useState("");
//   const [isPurchased, setIsPurchased] = useState(false);
 

//   const handleSave = async (e) => {
//     e.preventDefault();
//     const updatedItem = {
//       wishItemName,
//       wishItemPrice,
//       wishItemDescription,
//       wishItemURL,
//       wishItemImage,
//       wishItemCategory: itemCategory,
//       wishItemPriority: itemPriority,
//       isPurchased,
//     };
//     try {
//       await axios.put(
//         `http://localhost:5000/wishItems/update/${item._id}`,
//         updatedItem
//       );
//       alert("Item updated successfully");
//     } catch (error) {
//       console.error("Error updating item", error);
//       alert("Failed to update item");
//     }

//     return (
//       <div className="form-container">
//         <Form onSubmit={handleSave} className="wish-form">
//           <Form.Group className="mb-3">
//             <Form.Label>Item Name</Form.Label>
//             <Form.Control
//               value={wishItemName}
//               onChange={(e) => setWishItemName(e.target.value)}
//               type="text"
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Item Price</Form.Label>
//             <Form.Control
//               value={wishItemPrice}
//               onChange={(e) => setWishItemPrice(e.target.value)}
//               type="number"
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Item Description</Form.Label>
//             <Form.Control
//               value={wishItemDescription}
//               onChange={(e) => setWishItemDescription(e.target.value)}
//               type="text"
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Item URL</Form.Label>
//             <Form.Control
//               value={wishItemURL}
//               onChange={(e) => setWishItemURL(e.target.value)}
//               type="text"
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Item Image URL</Form.Label>
//             <Form.Control
//               value={wishItemImage}
//               onChange={(e) => setWishItemImage(e.target.value)}
//               type="text"
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Item Category</Form.Label>
//             <Form.Select
//               value={itemCategory}
//               onChange={(e) => setItemCategory(e.target.value)}
//             >
//               <option value="Home&Living">🏡 Home & Living </option>
//               <option value="Tech&Gadgets">📱 Tech & Gadgets </option>
//               <option value="Fashion&Apparel">👗 Fashion & Apparel </option>
//             </Form.Select>
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Item Priority</Form.Label>
//             <Form.Select
//               value={itemPriority}
//               onChange={(e) => setItemPriority(e.target.value)}
//             >
//               <option value="Need It Now">Need It Now! 🚀</option>
//               <option value="Would Be Nice">Would Be Nice 🎯</option>
//               <option value="Maybe Someday">Maybe Someday 🤔</option>
//             </Form.Select>
//           </Form.Group>

//           <Form.Group>
//             <Form.Check
//               type="checkbox"
//               label="Is Purchased"
//               checked={isPurchased}
//               onChange={(e) => setIsPurchased(e.target.checked)}
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Save Changes
//           </Button>
//           <Button variant="secondary" onClick={onSave} className="ms-2">
//             Cancel
//           </Button>
//         </Form>
//       </div>
//     );
//   };
// }

// export default EditForm;

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import "./WishCartAddForm.css";


function EditForm({CancelEditing,item}) {
console.log(item);
    const [wishItemName, setWishItemName] = useState(item.wishItemName);
      const [wishItemPrice, setWishItemPrice] = useState(item.wishItemPrice);
      const [wishItemDescription, setWishItemDescription] = useState(item.wishItemDescription);
      const [wishItemURL, setWishItemURL] = useState(item.wishItemURL);
      const [wishItemImage, setWishItemImage] = useState(item.wishItemImage);
      const [itemCategory, setItemCategory] = useState(item.wishItemCategory);
      const [itemPriority, setItemPriority] = useState(item.wishItemPriority);
      const [isPurchased, setIsPurchased] = useState(false);

async function handleSave(e,id) {
    e.preventDefault();
    console.log("save edit")
    
      try {
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
          let response = await axios.put(`http://localhost:5000/wishItems/update/${id}`)
      } catch (error) {
        console.error(error);
        
      }
    //console.log("updated Item",updatedItem);
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
                  <Button variant="secondary" onClick={CancelEditing} className="ms-2">
                    Cancel
                  </Button>
                </Form>
              </div>
            );
}



export default EditForm
