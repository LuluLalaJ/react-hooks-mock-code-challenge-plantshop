import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const renderPlantCards = plants.map(plant=> <PlantCard key={plant.id} plant={plant}/> )
  return (
    <ul className="cards">
      {renderPlantCards}
      </ul>
  );
}

export default PlantList;
