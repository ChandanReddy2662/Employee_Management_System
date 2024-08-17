import React from 'react';
import axios from 'axios';

const WorkExperienceForm = ({ onWorkExperienceSubmit, onFormClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onWorkExperienceSubmit(event);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add Work Experience Details</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="companyName" style={{ display: 'block', marginBottom: '5px' }}>Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Company Name"
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="designation" style={{ display: 'block', marginBottom: '5px' }}>Designation</label>
          <input
            type="text"
            id="designation"
            name="designation"
            placeholder="Designation"
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="fromDate" style={{ display: 'block', marginBottom: '5px' }}>From Date</label>
          <input
            type="date"
            id="fromDate"
            name="fromDate"
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="toDate" style={{ display: 'block', marginBottom: '5px' }}>To Date</label>
          <input
            type="date"
            id="toDate"
            name="toDate"
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>Submit</button>
          <button
            type="button"
            onClick={onFormClose}
            style={{ padding: '10px 20px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px' }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkExperienceForm;
