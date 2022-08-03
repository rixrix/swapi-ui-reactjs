import React, { useEffect, useState } from "react";

const Vehicles = ({data}) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">name</th>
          <th scope="col">model</th>
          <th scope="col">manufacturer</th>
          <th scope="col">cost_in_credits</th>
          <th scope="col">length</th>
          <th scope="col">max_atmosphering_speed</th>
          <th scope="col">crew</th>
          <th scope="col">passengers</th>
          <th scope="col">cargo_capacity</th>
          <th scope="col">consumables</th>
          <th scope="col">vehicle_class</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map(planet => (
            <tr>
              <th scope="row">{planet.name}</th>
              <td>{planet.model}</td>
              <td>{planet.manufacturer}</td>
              <td>{planet.cost_in_credits}</td>
              <td>{planet.length}</td>
              <td>{planet.max_atmosphering_speed}</td>
              <td>{planet.crew}</td>
              <td>{planet.passengers}</td>
              <td>{planet.cargo_capacity}</td>
              <td>{planet.consumables}</td>
              <td>{planet.vehicle_class}</td>
            </tr>
          ))
        }

      </tbody>
    </table>
  );
};

const VehiclesContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const getInitialList = async () => {
      const result = await fetch("https://swapi.dev/api/vehicles/");
      const data = await result.json();
      setVehicles(data.results);
    };

    getInitialList();
  });

  return (
    <Vehicles data={vehicles} />
  );
};

export default VehiclesContainer;
