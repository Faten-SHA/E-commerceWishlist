import React from 'react'
import { useState , useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';


function WishItemsList() {
    let [items,setItems] = useState([]);

    async function getWishItems() {
        try {
          let response =await axios.get("http://localhost:5000/wishItems");
          console.log(response.data);
          setItems(response.data);
        }catch(err) {
            console.log("Error fetching Wish Items",err);

        }
    } 
    useEffect(() => {
        getWishItems();
    },[]);

//Function To delete an item
async function deleteWishItem(id) {
    //console.log("Delete item with id:",id);
    try {
        if (window.confirm("Are you sure you want to delete this item?")) {
        
        
        let response = await axios.delete(`http://localhost:5000/wishItems/delete/${id}`);
        alert(response.data.msg);
        getWishItems();
        //console.log(response.data);
        }
    } catch (error) {
        console.log("Error deleting item",error);
        
    }
}

  return (
    
    <div>
        <h1>Wish Items List</h1>

       <div>
        {items.map((item) => (
       <Card key={item._id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.wishItemImage} />
      <Card.Body>
        <Card.Title>{item.wishItemName}</Card.Title>
        <Card.Text>
          {item.wishItemDescription}
        </Card.Text>
        <Card.Text>
          {item.wishItemPrice}
        </Card.Text>
        <Card.Text>
          {item.wishItemCategory}
        </Card.Text>
        <Button variant="primary">{item.wishItemURL}</Button>
        <Button variant="danger" onClick={()=>deleteWishItem(item._id)}>Delete</Button>
        <Button variant="warning">Edit</Button>
      </Card.Body>
    </Card>
    ))}
       </div>
    </div>
  )
}

export default WishItemsList