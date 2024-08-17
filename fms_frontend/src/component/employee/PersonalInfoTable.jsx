import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PersonalInfoTable = ({ data, onEditPersonalInfo, onAddPersonalInfo, back }) => {
  const [personalInfoData, setPersonalInfoData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPersonalInfoData = () => {
      axios
        .get(`http://localhost:4000/api/personal-info/${data["_id"]}`, {
          headers: {
            authorization: localStorage.getItem("token") || "",
          },
        })
        .then((response) => {
          const data = response.data;
          const temp = {
            data,
            FirstName: data["FirstName"] || "Not Available",
            MiddleName: data["MiddleName"] || "Not Available",
            LastName: data["LastName"] || "Not Available",
            Gender: data["Gender"] || "Not Available",
            ContactNo: data["ContactNo"] || "Not Available",
            Email: data["Email"] || "Not Available",
            PANcardNo: data["PANcardNo"] || "Not Available",
            DOB: data["DOB"]?.slice(0, 10) || "Not Available",
            Hobbies: data["Hobbies"] || "Not Available",
            PresentAddress: data["PresentAddress"] || "Not Available",
          };
          setPersonalInfoData([temp]);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    loadPersonalInfoData();
  }, [data]);

  const renderEditButton = (data) => {
    if (back) return null;
    return (
      <button onClick={() => onEditPersonalInfo(data)}>
        Edit
      </button>
    );
  };

  return (
    <div>
      <h2>
        Employee Personal Details {back ? `of ${data["FirstName"]} ${data["LastName"]}` : ""}
      </h2>
      {back && (
        <Link to="/hr/employee">
          <button>
            Back
          </button>
        </Link>
      )}
      <div style={{ clear: 'both' }} />
      {loading ? (
        <div style={{ textAlign: 'center', marginTop: '45px' }}>
          <div style={{ display: 'inline-block', border: '5px solid red', borderRadius: '50%', width: '50px', height: '50px', borderTop: '5px solid transparent', animation: 'spin 1s linear infinite' }} />
        </div>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Contact No</th>
              <th>Email</th>
              <th>PAN Card No</th>
              <th>DOB</th>
              <th>Hobbies</th>
              <th>Present Address</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {personalInfoData.map((item, index) => (
              <tr key={index}>
                <td>{item.FirstName}</td>
                <td>{item.MiddleName}</td>
                <td>{item.LastName}</td>
                <td>{item.Gender}</td>
                <td>{item.ContactNo}</td>
                <td>{item.Email}</td>
                <td>{item.PANcardNo}</td>
                <td>{item.DOB}</td>
                <td>{item.Hobbies}</td>
                <td>{item.PresentAddress}</td>
                <td>{renderEditButton(item.data)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PersonalInfoTable;
