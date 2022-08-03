import React, { useEffect, useState } from "react";

const People = ({data}) => {
  return (
    <table className="table table-striped">
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
        {
          data.map(person => (
            <tr>
              <th scope="row">{person.name}</th>
              <td>{person.height}</td>
              <td>{person.mass}</td>
              <td>{person.gender}</td>
              <td>{person.homeworld}</td>
            </tr>
          ))
        }

      </tbody>
    </table>
  );
};

const PeopleContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const getInitialList = async () => {
      const result = await fetch(`https://swapi.dev/api/people/`);
      const data = await result.json();
      setPeople(data.results);
    };

    getInitialList();
  });

  return (
    <People data={people} />
  );
};

export default PeopleContainer;
