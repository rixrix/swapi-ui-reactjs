import React, { useEffect, useState } from "react";

import config from "../config";
import Spinner from "./Spinner";

const People = ({ data }) =>
  (<React.Fragment>
    <h1 className="h2">People</h1>
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Height</th>
            <th scope="col">Mass</th>
            <th scope="col">Gender</th>
            <th scope="col">Homeworld</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, idx) => (
            <tr key={idx}>
              <td>{person.name}</td>
              <td>{person.height}</td>
              <td>{person.mass}</td>
              <td>{person.gender}</td>
              <td>{person.homeworld}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </React.Fragment>
  );

const PeopleContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const getInitialList = async () => {
      try {
        const result = await fetch(`${config.apiUrl}/resource/people/`);
        const data = await result.json();

        setHasError(false);
        setPeople(data.results);
      } catch (error) {
        setHasError(true);
      } finally {
        console.log(hasError);
        setIsLoading(false);
      }
    };

    getInitialList();
  }, []);

  return isLoading ? <Spinner /> : <People data={people} />;
};

export default PeopleContainer;
