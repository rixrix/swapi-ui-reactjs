import React, { useEffect, useState } from "react";

import config from "../config";
import Spinner from "./Spinner";

const People = ({ data }) =>
  (<table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">name</th>
          <th scope="col">height</th>
          <th scope="col">mass</th>
          <th scope="col">gender</th>
          <th scope="col">homeworld</th>
        </tr>
      </thead>
      <tbody>
        {data.map((person, idx) => (
          <tr key={idx}>
            <td>{person.height}</td>
            <td>{person.mass}</td>
            <td>{person.gender}</td>
            <td>{person.homeworld}</td>
          </tr>
        ))}
      </tbody>
    </table>
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
