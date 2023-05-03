import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCountryById } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";


export default function Detail() {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>Country Detail</h1>
      <h2>{country.name}</h2>
      <img src={country.image} alt={country.name} />
      <h3>Continent: {country.continent}</h3>
      <h3>Capital: {country.capital}</h3>
      <h3>Subregion: {country.subregion}</h3>
      <h3>Area: {country.area}</h3>
      <h3>Population: {country.population}</h3>
    </div>
  );
}