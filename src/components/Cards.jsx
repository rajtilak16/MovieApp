import React, { useState } from "react";

const Cards = ({ show }) => {
  

  // Prepare the background image style if the image exists
  const backgroundImageStyle = show.show.image
    ? {
        backgroundImage: `url(${show.show.image.medium})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  return (
    <div
      className="flex flex-col w-full h-full p-5 font-semibold"
      style={backgroundImageStyle}
    >
      {/* Adding a semi-transparent overlay for better text readability */}
      <div className="bg-black bg-opacity-10 p-5 rounded">
        <h1 className="text-white">Show name is {show.show.name}</h1>
        <p className="text-white">Language : {show.show.language}</p>
        <p className="text-white">
          Genres :{" "}
          {show.show.genres.map((genre, index) => (
            <span key={index} className="text-white">
              {" "}
              {genre}{" "}
            </span>
          ))}
        </p>
        <a
        //here in the link : is sent by mistake work on it
          href={`/card/${show.show.id}`}
          // onClick={cardHandler}
          className="bg-blue-900 h-6 p-2 flex  items-center justify-center rounded-xl text-white"
        >
          Details
        </a>
      </div>
      {/* The image is now set as the background of the Card, so no <img> tag is needed */}
    </div>
  );
};

export default Cards;
