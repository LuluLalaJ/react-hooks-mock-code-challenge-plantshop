import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onDelete, onChangePrice, updatePlantStock, outOfStocks }) {

  const renderPlantCards = plants.map(plant => <PlantCard key={plant.id} plant={plant} onDelete={onDelete} onChangePrice={onChangePrice} updatePlantStock={updatePlantStock} outOfStocks={outOfStocks}/> )
  return (
    <ul className="cards">
      {renderPlantCards}
      </ul>
  );
}

export default PlantList;
