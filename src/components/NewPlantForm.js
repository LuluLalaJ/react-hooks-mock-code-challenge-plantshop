import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {

  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: ""
  })

  function updateNewPlantData(e){
    const key = e.target.name
    let val = e.target.value

    if (e.target.type === "number") {
      val = Number(val)
    }
    setNewPlant({
      ...newPlant,
      [key]: val
    })
  }

  function submitNewPlant(e) {
    e.preventDefault()
    onAddPlant(newPlant)
    setNewPlant({
      name: "",
      image: "",
      price: 0
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submitNewPlant}>
        <input type="text" name="name" onChange={updateNewPlantData} value={newPlant.name}placeholder="Plant name" />
        <input type="text" name="image" onChange={updateNewPlantData} value={newPlant.image} placeholder="Image URL" />
        <input type="number" name="price" step="0.01" onChange={updateNewPlantData} value={newPlant.price} placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
