import React from "react";
import axios from "axios";

const LeaveApplicationEmpForm = ({ onLeaveApplicationEmpSubmit, onFormClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onLeaveApplicationEmpSubmit(event);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Leave Application Details</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Leave Type</label>
          <select style={{ width: "100%", padding: "8px", borderRadius: "4px" }} required>
            <option value="" disabled>Select your option</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Casual Leave">Casual Leave</option>
            <option value="Privilege Leave">Privilege Leave</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>From Date</label>
          <input
            type="date"
            style={{ width: "100%", padding: "8px", borderRadius: "4px" }}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>To Date</label>
          <input
            type="date"
            style={{ width: "100%", padding: "8px", borderRadius: "4px" }}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Reason for Leave</label>
          <input
            type="text"
            placeholder="Reason for leave"
            style={{ width: "100%", padding: "8px", borderRadius: "4px" }}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Leave Status</label>
          <select style={{ width: "100%", padding: "8px", borderRadius: "4px" }} required>
            <option value="1" selected>Pending</option>
          </select>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="submit"
            style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px" }}
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onFormClose}
            style={{ padding: "10px 20px", backgroundColor: "#6c757d", color: "white", border: "none", borderRadius: "4px" }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeaveApplicationEmpForm;
