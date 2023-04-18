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

  function addNewPlant(newPlant) {
    const postRequest = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newPlant)
    }

    fetch(plantsUrl, postRequest)
      .then(r => r.json())
      .then(data => setPlants([...plants, data]))

  }

  function deletePlant(deletedId) {
    const updatedPlants = plants.filter(plant => plant.id !== deletedId)
    const deleteRequest = {
      method: "DELETE"
    }

    fetch(plantsUrl+deletedId, deleteRequest)
    .then(r => r.json())
    .then(data => setPlants(updatedPlants))
  }

  return (
    <main>
      <NewPlantForm onAddPlant={addNewPlant}/>
      <Search onSearch={searchPlants} />
      <PlantList plants={displayedPlants} onDelete={deletePlant}/>
    </main>
  );
}

export default PlantPage;
