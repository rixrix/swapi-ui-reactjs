import React, { useEffect, useState } from "react";

import config from "../config";

const Species = ({ data }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">name</th>
          <th scope="col">classification</th>
          <th scope="col">designation</th>
          <th scope="col">average_height</th>
          <th scope="col">skin_colors</th>
          <th scope="col">hair_colors</th>
          <th scope="col">eye_colors</th>
          <th scope="col">average_lifespan</th>
          <th scope="col">homeworld</th>
        </tr>
      </thead>
      <tbody>
        {data.map((species, idx) => (
          <tr key={idx}>
            <th scope="row">{species.name}</th>
            <td>{species.classification}</td>
            <td>{species.designation}</td>
            <td>{species.average_height}</td>
            <td>{species.skin_colors}</td>
            <td>{species.hair_colors}</td>
            <td>{species.eye_colors}</td>
            <td>{species.average_lifespan}</td>
            <td>{species.homeworld}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const SpeciesContainer = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    const getInitialList = async () => {
      const result = await fetch(`${config.apiUrl}/resource/species/`);
      const data = await result.json();
      setSpecies(data.results);
    };

    getInitialList();
  });

  return <Species data={species} />;
};

export default SpeciesContainer;
