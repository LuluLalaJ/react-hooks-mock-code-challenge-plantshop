import React, { useState } from "react";

function PlantCard({plant, onDelete}) {
  const { id, name, image ="https://via.placeholder.com/400", price} = plant
  const [inStock, changeInStock] = useState(true)

  function changeStockStatus() {
    changeInStock(inStock => !inStock)
  }

  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={changeStockStatus}>In Stock</button>
      ) : (
        <button onClick={changeStockStatus} >Out of Stock</button>
      )}
      <button onClick={()=>onDelete(id)}>Delete</button>
    </li>
  );
}

export default PlantCard;
