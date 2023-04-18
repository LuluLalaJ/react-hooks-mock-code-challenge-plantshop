import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const plantsUrl = "http://localhost:6001/plants/"
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(plantsUrl)
    .then(r => r.json())
    .then(data => setPlants(data))
  }, [])

  const displayedPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  function searchPlants(name) {
    setSearch(name)
  }
  return (
    <main>
      <NewPlantForm />
      <Search onSearch={searchPlants} />
      <PlantList plants={displayedPlants}/>
    </main>
  );
}

export default PlantPage;
