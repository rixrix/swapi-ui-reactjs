import React, { useEffect, useState } from "react";

import config from "../config";

const Planets = ({ data }) => {
  return (
  <React.Fragment>
    <h1 className="h2">Planets</h1>
    <div className="table-responsive">
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Rotation Oeriod</th>
          <th scope="col">Orbital Period</th>
          <th scope="col">Diameter</th>
          <th scope="col">Climate</th>
          <th scope="col">Gravity</th>
          <th scope="col">Terrain</th>
          <th scope="col">Surface Water</th>
          <th scope="col">Population</th>
        </tr>
      </thead>
      <tbody>
        {data.map((planet, idx) => (
          <tr key={idx}>
            <th scope="row">{planet.name}</th>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gavity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  </React.Fragment>
  );
};

const PlanetsContainer = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getInitialList = async () => {
      const result = await fetch(`${config.apiUrl}/resource/planets/`);
      const data = await result.json();
      setPlanets(data.results);
    };

    getInitialList();
  });

  return <Planets data={planets} />;
};

export default PlanetsContainer;
