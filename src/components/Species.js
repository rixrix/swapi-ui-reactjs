import React, { useEffect, useState } from "react";

import config from "../config";

const Species = ({ data }) => {
  return (
  <React.Fragment>
    <h1 className="h2">Species</h1>
    <div className="table-responsive">
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Classification</th>
          <th scope="col">Designation</th>
          <th scope="col">Average Height</th>
          <th scope="col">Skin Colors</th>
          <th scope="col">Hair Colors</th>
          <th scope="col">Eye Colors</th>
          <th scope="col">Average Lifespan</th>
          <th scope="col">Homeworld</th>
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
    </div>
  </React.Fragment>
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
