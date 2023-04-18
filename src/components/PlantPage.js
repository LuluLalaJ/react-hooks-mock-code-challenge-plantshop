import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const plantsUrl = "http://localhost:6001/plants/"
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch(plantsUrl)
    .then(r => r.json())
    .then(data => setPlants(data))
  }, [])

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
