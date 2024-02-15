import React, { useEffect, useState } from "react";

const IpLookupComponent = () => {
  const [countryName, setCountryName] = useState(""); // Initialize state to hold the country code
  const [regionName, setRegionName] = useState(""); // Initialize state to hold the region name
  const [cityName, setCityName] = useState(""); // Initialize state to hold the city name

  useEffect(() => {
    const apiUrl = "https://freeipapi.com/api/json"; // Note: Ensure this API supports CORS and is correct

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(
          "User's location:",
          data.countryName,
          data.regionName,
          data.cityName
        );
        setCountryName(data.countryName); // Update state with the fetched country code
        setRegionName(data.regionName); // Update state with the fetched region name
        setCityName(data.cityName); // Update state with the fetched city name
      })
      .catch((error) => console.error("Error fetching IP info:", error));
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <div>
      {countryName && regionName && cityName && (
        <div>
          Thank you for visiting our website from {cityName}, {regionName},{" "}
          {countryName}.
        </div>
      )}
    </div>
  );
};

export default IpLookupComponent;
