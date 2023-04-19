import React, { useState } from "react";

function PlantCard({ plant, onDelete, onChangePrice, updatePlantStock, outOfStocks }) {
  const { id, name, image ="https://via.placeholder.com/400", price} = plant
  const [newPrice, setNewPrice] = useState('')

  function changePrice(e) {
    setNewPrice(e.target.value)
  }

  function submitNewPrice(e) {
    const updatedPlant = {...plant, price: Number(newPrice)}
    onChangePrice(updatedPlant)
    setNewPrice('')
  }

  const inStock = outOfStocks.includes(id) ? false : true
  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={(e)=>updatePlantStock(id)}>In Stock</button>
      ) : (
          <button onClick={(e)=>updatePlantStock(id)} >Out of Stock</button>
      )}
      <button onClick={()=>onDelete(id)}>Delete</button>
      <input type="number" name="new-price" step="0.01" onChange={changePrice} value={newPrice} placeholder="Enter new price ..." />
      <button onClick={submitNewPrice} >Change Price</button>

    </li>
  );
}

export default PlantCard;
