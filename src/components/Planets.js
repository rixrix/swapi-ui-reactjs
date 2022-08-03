import React, { useEffect, useState } from "react";

import config from "../config";

const Planets = ({ data }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">name</th>
          <th scope="col">rotation_period</th>
          <th scope="col">orbital_period</th>
          <th scope="col">diameter</th>
          <th scope="col">climate</th>
          <th scope="col">gravity</th>
          <th scope="col">terrain</th>
          <th scope="col">surface_water</th>
          <th scope="col">population</th>
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
