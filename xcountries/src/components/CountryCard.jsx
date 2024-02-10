import React from "react";

const CountryCard = ({ country }) => {
  let { name, flags } = country;
  console.log(flags);
  return (
    <div className="countryCard">
      <img src={flags.svg} alt={name.common} />
      <h3>{name.common}</h3>
    </div>
  );
};

export default CountryCard;
