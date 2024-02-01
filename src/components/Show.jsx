import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";

const Show = () => {
  const [shows, setShows] = useState([]);

  async function getShows() {
    const response = await axios.get(
      "https://api.tvmaze.com/search/shows?q=all"
    );
    setShows(response.data); // Fetch and keep only the first 10 shows
  }

  useEffect(() => {
    getShows();
  }, []);

  return (
    <> 
      <div className="bg-black h-8 text-white flex justify-center text-xl font-bold">Our Shows</div>
      <div className="grid grid-cols-3 grid-rows-4 gap-4 w-screen h-screen text-white bg-black">
        {shows.map((show, index) => (
          <div
            key={index}
            className={`relative flex justify-center items-center rounded-3xl overflow-hidden border-white bg-blue-700 ${
              index === 9 ? "col-start-2" : ""
            }`}
          >
            <Cards show={show} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Show;
