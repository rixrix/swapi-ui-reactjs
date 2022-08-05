import React, { useEffect, useState } from "react";

import config from "../config";

const Vehicles = ({ data }) => {
  return (
  <React.Fragment>
  <h1 className="h2">Species</h1>
    <div className="table-responsive">
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Model</th>
          <th scope="col">Manufacturer</th>
          <th scope="col">Length</th>
          <th scope="col">Crew</th>
          <th scope="col">Passengers</th>
          <th scope="col">Cargo Capacity</th>
          <th scope="col">Consumables</th>
          <th scope="col">Vehicle Class</th>
        </tr>
      </thead>
      <tbody>
        {data.map((planet, idx) => (
          <tr key={idx}>
            <th scope="row">{planet.name}</th>
            <td>{planet.model}</td>
            <td>{planet.manufacturer}</td>
            <td>{planet.length}</td>
            <td>{planet.crew}</td>
            <td>{planet.passengers}</td>
            <td>{planet.cargo_capacity}</td>
            <td>{planet.consumables}</td>
            <td>{planet.vehicle_class}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  </React.Fragment>
  );
};

const VehiclesContainer = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const getInitialList = async () => {
      const result = await fetch(`${config.apiUrl}/resource/vehicles/`);
      const data = await result.json();
      setVehicles(data.results);
    };

    getInitialList();
  });

  return <Vehicles data={vehicles} />;
};

export default VehiclesContainer;
