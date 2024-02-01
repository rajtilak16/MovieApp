// // // import React from 'react'
// // // import { useParams } from 'react-router-dom'
// // // import axios from 'axios';

// // // const Card = () => {
// // //     const  {id} = useParams();

// // //     async  function getData() {
// // //         try{
// // //             let response = await axios.get(`https://api.tvmaze.com/search/shows?q=all/`);
// // //             // console.log(response.data[0].show.id);
// // //             // response.data.map((rid,id))
// // //              return response.data;

// // //          } catch(err) {
// // //              console.log('error', err);
// // //          }

// // //      };
// // //      const data = getData() ;
// // //     function printing(){
// // //         for(let i=0; i<10; i++){
// // //             console.log(data[i]);
// // //         }
// // //     }
// // //     printing();
// // //     //  console.log(object);

// // //     //

// // //   return (
// // //     <div className='flex'>Card:  </div>
// // //   )
// // // }

// // // export default Card

// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';
// // import axios, { all } from 'axios';

// // const Card = () => {
// //     const { id } = useParams();
// //     const [allshowData, setallShowData] = useState(null);
// //     const [showData, setshowData] = useState(null);

// //     useEffect(() => {
// //         const fetchData = async () => {
// //             try {
// //                 const response = await axios.get(`https://api.tvmaze.com/search/shows?q=all/ `);
// //                 setallShowData(response.data);
// //                 console.log(response.data)
// //             } catch (error) {
// //                 console.error('Error fetching show data:', error);
// //             }
// //         };

// //         fetchData();
// //     }, [id]);
// //     function printing(){
// //         if(!allshowData){return}
// //         for(let i in allshowData){
// //             console.log("data",allshowData[i].show.id);
// //             console.log(typeof allshowData[i].show.id);
// //             console.log("type of id from url",typeof Number(id));
// //             let alpha;
// //             if(allshowData[i].show.id === Number(id)){
// //                 console.log("printing before null", allshowData[i].show);
// //                 alpha =  allshowData[i].show;
// //             //    setshowData(allshowData[i].show)
// //             //    return
// //             }

// //             console.log("alpha",alpha);
// //         }
// //        console.log("data", showData)
// //         // allshowData.map((show,i)=>{
// //         //     console.log(show.show.id);
// //         // })

// // }
// // printing();
// //     return (
// //         <div>
// //             {allshowData ? (
// //                 <div>
// //                     {/* <h2>{showData.show.name}</h2> */}
// //                     {/* <p>{showData.show.summary}</p> */}
// //                     {/* Add other details as needed */}
// //                 </div>
// //             ) : (
// //                 <p>Loading...</p>
// //             )}
// //         </div>
// //     );
// // };

// // export default Card;
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const Card = () => {
//   const { id } = useParams();
//   const [allshowData, setAllShowData] = useState(null);
//   const [showData, setShowData] = useState(null);

//   // Fetch all shows data
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.tvmaze.com/search/shows?q=all/`
//         );
//         setAllShowData(response.data);
//       } catch (error) {
//         console.error("Error fetching show data:", error);
//       }
//     };

//     fetchData();
//   }, [id]); // This effect runs when `id` changes

//   c

//   // Process allshowData to find the show with the matching ID
// //   useEffect(() => {
// //     if (!allshowData) return; // Ensure allshowData is not null

// //     const findShow = () => {
// //       for (let i in allshowData) {
// //         console.log(allshowData[i].show.id);
// //         const an = (allshowData[i].show.id == Number(ans)  ? true : false);
// //        console.log(an);
// //         if (allshowData[i].show.id === Number(id)) {
// //           setShowData(allshowData[i].show);
// //           break; // Exit the loop once the matching show is found
// //         }
// //       }
// //     };

// //     findShow();
// //   }, [allshowData, id]); // This effect runs when `allshowData` or `id` changes

// //   function show(){
// //     console.log(showData);
// //   }
// //   show()
//   return (
//     <div>
//       {showData ? (
//         <div>
//           {/* Render your show data here */}
//           {/* <h2>{showData.name}</h2> */}
//           {/* Add more details as needed */}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Card;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Card = () => {
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
    } else {
      console.log(`No show found with ID ${id}`);
    }
  }, [allshowData, id]); // This effect runs when allshowData or id changes

  if (!showData) return <p>Loading...</p>;

  return (
    <div className="flex h-screen max-h-screen">
      <div className="w-1/2 bg-blue-900 h-screen">
        {showData.image ? (
          <img
            className="object-cover h-full w-full"
            src={showData.image.original}
          />
        ) : (
          <div className="bg-zinc-900 h-screen text-white flex items-center justify-center">
            Image not available at this moment
          </div>
        )}
      </div>
      <div className="relative w-1/2 bg-zinc-900 text-white p-4">
        <h2 className="  font-bold text-3xl  mb-4 text-center">
          {showData.name}
        </h2>
        {/* <h2>{showData.status}</h2> */}
        <h2>Type: {showData.type}</h2>
        <h2>{showData.language}</h2>
        <h2>
          Genres:{" "}
          {showData.genres.map((genre) => {
            return genre + " ";
          })}
        </h2>

        <div dangerouslySetInnerHTML={{ __html: showData.summary }} />
        <div className="grid grid-cols-3 gap-4 mt-5">
          <h2>Time: {showData.schedule.time}</h2>
          <h2>Day: {showData.schedule.days}</h2>
          <h2>Rating: {showData.rating.average}</h2>
        </div>
        <div className="absolute bottom-4 right-4 flex justify-between">
          {/* <a
          href={showData.officialSite}
          className="left-1/2 flex items-center bg-blue-500 rounded p-2"
        >
          Official Site
        </a>
        <a
          href={showData.officialSite}
          className="left-1/2 flex items-center bg-blue-500 rounded p-2"
        >
          Book Now
        </a> */}
          <a
            href={showData.officialSite}
            className="bg-blue-500 rounded p-2 mr-2"
          >
            Official Site
          </a>
          <a href={`/form/${showData.id}`} className="bg-blue-500 rounded p-2">
            Book Now
          </a>
        </div>
      </div>

      {/* Render more details as needed */}
    </div>
  );
};

export default Card;
