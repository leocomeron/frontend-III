import React, { useEffect, useState } from "react";

const Locations = () => {
  const [locations, setLocations] = useState([]);

  const getLocations = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/location");
    const data = await res.json();
    setLocations(data.results);
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <div>
      <h1>Locations List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Dimension</th>
          </tr>
        </thead>
        <tbody>
          {locations.length
            ? locations.map((lc) => (
                <tr key={lc.name}>
                  <td>{lc.name}</td>
                  <td>{lc.type}</td>
                  <td>{lc.dimension}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Locations;
