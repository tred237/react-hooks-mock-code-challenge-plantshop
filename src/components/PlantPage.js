import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plantList, onNewPlantSubmit, onPlantSearch }) {
  return (
    <main>
      <NewPlantForm onNewPlantSubmit={onNewPlantSubmit}/>
      <Search onPlantSearch={onPlantSearch}/>
      <PlantList plantList={plantList}/>
    </main>
  );
}

export default PlantPage;
