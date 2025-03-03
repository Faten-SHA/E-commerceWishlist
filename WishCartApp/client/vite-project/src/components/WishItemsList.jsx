import React from 'react'
import { useState , useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import './WishItemsList.css';
import EditForm from './EditForm';


function WishItemsList() {
    let [items,setItems] = useState([]);
    const [isEditing, setIsEditing] = useState(null);

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
    
    <div className="container">
        <h1>Wish Items List</h1>

       <div className="card-container">
        {items.map((item) => (
       <Card key={item._id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.wishItemImage} />
      <Card.Body>
        <Card.Title>{item.wishItemName}</Card.Title>
        <Card.Text>
          Description: {item.wishItemDescription}
        </Card.Text>
        <Card.Text>
          Price: {item.wishItemPrice}
        </Card.Text>
        <Card.Text>
          Category: {item.wishItemCategory}
        </Card.Text>
        <div>
        <Button variant="primary" href={item.wishItemURL}>Go to Item's Website</Button>
        </div>
        <div>
        <Button variant="danger" onClick={()=>deleteWishItem(item._id)}>Delete</Button>
        <Button variant="warning" onClick={() => setIsEditing(item)}>Edit</Button>
        </div>
      </Card.Body>
    </Card>
    ))}
       </div>
       {isEditing && <EditForm item={isEditing} onSave={() => { setIsEditing(null); getWishItems(); } }/>}  // I don't understand this line
    </div>
  )
}

export default WishItemsList;
