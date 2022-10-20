import React, { useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [allPlants, setAllPlants] = useState([])
  const [plantList, setPlantList] = useState([])

  useEffect(() => {
    pullPlantData()
  },[])

  function handleNewPlantSubmit(){
    pullPlantData()
  }

  function pullPlantData(){
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then((plants) => {
      setPlantList(plants)
      setAllPlants(plants)
    })
  }

  function handleChange(e){
    const newPlantList = allPlants.filter(plant => plant.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setPlantList(newPlantList)
  }

  return (
    <div className="app">
      <Header />
      <PlantPage plantList={plantList} onNewPlantSubmit={handleNewPlantSubmit} onPlantSearch={handleChange}/>
    </div>
  );
}

export default App;
