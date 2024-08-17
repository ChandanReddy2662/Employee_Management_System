import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PositionForm = ({ onPositionSubmit, onFormClose }) => {
  const [companyInfo, setCompanyInfo] = useState([]);
  
  useEffect(() => {
    const loadCompanyInfo = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/company', {
          headers: {
            authorization: localStorage.getItem('token') || '',
          },
        });
        setCompanyInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    
    loadCompanyInfo();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add Position Details</h2>

      <div style={{ marginTop: '20px' }}>
        <form onSubmit={onPositionSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="company" style={{ display: 'block', marginBottom: '5px' }}>
              Company
            </label>
            <select id="company" name="country" required style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
              <option value="" disabled selected>
                Select your option
              </option>
              {companyInfo.map((data) => (
                <option key={data._id} value={data._id}>
                  {data.CompanyName}
                </option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="position" style={{ display: 'block', marginBottom: '5px' }}>
              Position
            </label>
            <input
              id="position"
              type="text"
              placeholder="Position"
              name="Position"
              required
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <div style={{ marginTop: '20px' }}>
            <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Submit
            </button>
            <button
              type="button"
              onClick={onFormClose}
              style={{ marginLeft: '10px', padding: '10px 20px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PositionForm;
