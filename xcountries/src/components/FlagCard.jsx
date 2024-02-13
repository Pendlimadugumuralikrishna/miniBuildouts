import React, { useEffect, useState } from "react";
import axios from "axios";
import { data } from "../Data/data";
import walk from "../assets/Walk.gif";
import CountryCard from "./CountryCard";

const FlagCard = () => {
  const [flag, setFlag] = useState([]);

  const fetchFlags = async () => {
    let url = "https://restcountries.com/v3.1/all";
    try {
      let response = await axios(url);
      if (response.status === 200) {
        setFlag(response.data);
      }
      //   setFlag(data);
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFlags();
  }, []);

  console.log(flag);

//   if (flag.length === 0) {
//     return (
//       <div>
//         <img src={walk} alt="Loader.jpg" width={100} />
//         <p>Loading...</p>
//       </div>
//     );
//   }
  return (
    <div className="container">
      {flag.map((country) => {
        return <CountryCard country={country} />;
      })}
    </div>
  );
};

export default FlagCard;
