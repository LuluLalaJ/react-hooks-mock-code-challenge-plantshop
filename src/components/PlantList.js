import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onDelete, onChangePrice }) {

  const renderPlantCards = plants.map(plant => <PlantCard key={plant.id} plant={plant} onDelete={onDelete} onChangePrice={onChangePrice}/> )
  return (
    <ul className="cards">
      {renderPlantCards}
      </ul>
  );
}

export default PlantList;
