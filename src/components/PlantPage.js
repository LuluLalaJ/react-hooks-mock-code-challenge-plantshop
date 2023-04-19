import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const plantsUrl = "http://localhost:6001/plants/"
  const [plants, setPlants] = useState([])
  const [outOfStocks, setOutOfStocks] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(plantsUrl)
    .then(r => r.json())
    .then(data => setPlants(data))
  }, [])
  //it is possilbe to add the instock data after fetching the data
  //but this is considered as changing the data
  //rather it is best to create another way to track

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

  function updatePrice(updatedPlant) {
    const id = updatedPlant.id
    const patchRequest = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(updatedPlant)
    }

    const upatedPlants = plants.map(plant => plant.id === updatedPlant.id ? updatedPlant : plant)

    fetch(plantsUrl + id, patchRequest)
      .then(r => r.json())
      .then(data => setPlants(upatedPlants))
  }

  function updatePlantStock(id) {
    if (!outOfStocks.includes(id)) {
      setOutOfStocks([...outOfStocks, id])
    } else {
      const afterRemoval = outOfStocks.filter(ele => ele !== id)
      setOutOfStocks(afterRemoval)
    }
  }

  return (
    <main>
      <NewPlantForm onAddPlant={addNewPlant}/>
      <Search onSearch={searchPlants} />
      <PlantList plants={displayedPlants} onDelete={deletePlant} onChangePrice={updatePrice} updatePlantStock={updatePlantStock} outOfStocks={outOfStocks}/>
    </main>
  );
}

export default PlantPage;
