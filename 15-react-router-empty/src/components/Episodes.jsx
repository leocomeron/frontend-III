import React, { useEffect, useState } from "react";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);

  const getEpisodes = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/episode");
    const data = await res.json();
    setEpisodes(data.results);
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <div>
      <h1>Episodes List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Episode</th>
            <th>Air date</th>
          </tr>
        </thead>
        <tbody>
          {episodes.length
            ? episodes.map((ep) => (
                <tr key={ep.name}>
                  <td>{ep.name}</td>
                  <td>{ep.episode}</td>
                  <td>{ep.air_date}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Episodes;
