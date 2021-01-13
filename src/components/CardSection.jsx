import React, { useState } from "react";
import "../index.css";

function CardSection() {
  var [Countrydata, updateData] = useState({
    isLoading: true,
    countries: [],
  });

  function setData(data) {
    updateData({
      isLoading: false,
      countries: data,
    });
  }

  function fetchUsers(Countrydata) {
    fetch("https://restcountries.eu/rest/v2/region/europe")
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        } else return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        alert(err);
      });
  }
  var fetchedData = window.addEventListener("load", fetchUsers());
  return (
    <div>
      <section className="card-section-container">
        {console.log(fetchedData)}
      </section>
    </div>
  );
}
export default CardSection;
