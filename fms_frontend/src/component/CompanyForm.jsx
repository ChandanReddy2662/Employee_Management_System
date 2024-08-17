import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

const CompanyForm = ({ onCompanySubmit, onFormClose }) => {
  const [countryData, setCountryData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [filteredStateData, setFilteredStateData] = useState([]);
  const [filteredCityData, setFilteredCityData] = useState([]);

  useEffect(() => {
    loadCountryInfo();
    loadStateInfo();
    loadCityInfo();
  }, []);

  const loadCountryInfo = () => {
    axios
      .get("http://localhost:4000/api/country", {
        headers: {
          authorization: localStorage.getItem("token") || "",
        },
      })
      .then((response) => {
        setCountryData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadStateInfo = () => {
    axios
      .get("http://localhost:4000/api/state", {
        headers: {
          authorization: localStorage.getItem("token") || "",
        },
      })
      .then((response) => {
        setStateData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadCityInfo = () => {
    axios
      .get("http://localhost:4000/api/city", {
        headers: {
          authorization: localStorage.getItem("token") || "",
        },
      })
      .then((response) => {
        setCityData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onCountryChange = (e) => {
    const currentCountry = e.target.value;
    const filteredState = stateData.filter(
      (data) => data["country"][0]["_id"] === currentCountry
    );
    setFilteredStateData(filteredState);
  };

  const onStateChange = (e) => {
    const currentState = e.target.value;
    const filteredCity = cityData.filter(
      (data) => data["state"][0]["_id"] === currentState
    );
    setFilteredCityData(filteredCity);
  };

  return (
    <div>
      <h2>Add Company Details</h2>
      <form onSubmit={onCompanySubmit}>
        <div>
          <label>Company Name</label>
          <input type="text" placeholder="Company Name" name="CompanyName" required />
        </div>

        <div>
          <label>Address</label>
          <textarea rows="3" placeholder="Address" required />
        </div>

        <div>
          <label>Country</label>
          <select name="country" onChange={onCountryChange}>
            <option value="" disabled selected>
              Select your option
            </option>
            {countryData.map((data, index) => (
              <option key={index} value={data["_id"]}>
                {data["CountryName"]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>State</label>
          <select name="state" required onChange={onStateChange}>
            <option value="" disabled selected>
              Select your option
            </option>
            {filteredStateData.map((data, index) => (
              <option key={index} value={data["_id"]}>
                {data["StateName"]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>City</label>
          <select name="city" required>
            <option value="" disabled selected>
              Select your option
            </option>
            {filteredCityData.map((data, index) => (
              <option key={index} value={data["_id"]}>
                {data["CityName"]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Postal Code</label>
          <input type="number" placeholder="Postal Code" required />
        </div>

        <div>
          <label>Website</label>
          <input type="text" placeholder="Website" required />
        </div>

        <div>
          <label>Email</label>
          <input type="email" placeholder="Email" required />
        </div>

        <div>
          <label>Contact Person</label>
          <input type="text" placeholder="Contact Person" required />
        </div>

        <div>
          <label>Contact No</label>
          <input type="text" placeholder="Contact No" required />
        </div>

        <div>
          <label>Fax No</label>
          <input type="text" placeholder="Fax No" required />
        </div>

        <div>
          <label>PAN No</label>
          <input type="text" placeholder="PAN No" required />
        </div>

        <div>
          <label>GST No</label>
          <input type="text" placeholder="GST No" required />
        </div>

        <div>
          <label>CIN No</label>
          <input type="text" placeholder="CIN No" required />
        </div>

        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={onFormClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyForm;
