import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Form = () => {
  const { id } = useParams();
  
  
  const [allshowData, setAllShowData] = useState([]);
  const [showData, setShowData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.tvmaze.com/search/shows?q=all`
        );
        setAllShowData(response.data);
      } catch (error) {
        console.error("Error fetching show data:", error);
      }
    };

    fetchData();
  }, []); // This effect runs once when the component mounts

  useEffect(() => {
    if (!allshowData.length) return; // Ensure allshowData is not empty

    const matchedShow = allshowData.find((item) => item.show.id === Number(id));
    if (matchedShow) {
      setShowData(matchedShow.show);
    //   console.log(matchedShow.show.rating.average)
    } else {
      console.log(`No show found with ID ${id}`);
    }
  }, [allshowData, id]); // This effect runs when allshowData or id changes

  if (!showData) return <p>Loading...</p>;

  return (
     
<>

<div className="flex">
    
<div className="relative bg-zinc-900 h-screen w-1/2 text-white flex flex-col items-center ">
<div className="flex items-center justify-center text-3xl font-bold bg-zinc-900 mt-10  text-white z-10">

Book Your Tickets
</div>
      <div className="relative text-xl " style={{ marginTop: "20vh", marginBottom: "5vh" }}>
        Movie Name : {showData.name}
        <br />
        Rating: {showData.rating ? showData.rating.average : "No rating available"}
        <br />
        Genre: {showData.genres.map((g) => g).join(", ")}
        <br/>
        Schedule : {showData.schedule.days} {showData.schedule.time}
      </div>
      <div className="flex flex-col w-2/5 justify-center">
        <input placeholder="your name" className="bg-zinc-600 text-black mb-3 p-1 rounded-lg"></input>
        <input placeholder="your email" className="bg-zinc-600 text-black mb-3 p-1 rounded-lg"></input>
        <input placeholder="your phone" className="bg-zinc-600 text-black mb-3 p-1 rounded-lg"></input>
      </div>
      <div>
        <button className="p-2 bg-blue-400 w-full rounded-xl">Book Now</button>
      </div>
    </div>
    <div className="h-screen max-h-screen w-1/2 bg-zinc-900 text-white flex items-center justify-center">
        {showData.image ? <img src={showData.image.original} alt="" style={{ width: "100%", maxHeight: "100%" }}/> : "Oops! No Image Available"}
   
</div>
</div>
   
</>
  );
};

export default Form;
