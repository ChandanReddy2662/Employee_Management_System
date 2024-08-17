import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RingLoader } from 'react-spinners';

const LeaveApplicationHRTable = ({ onEditLeaveApplicationHR }) => {
  const [leaveApplicationHRData, setLeaveApplicationHRData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    loadLeaveApplicationHRData();
  }, []);

  const loadLeaveApplicationHRData = () => {
    axios
      .get('http://localhost:4000/api/leave-application-hr/', {
        headers: {
          authorization: localStorage.getItem('token') || ''
        }
      })
      .then(response => {
        const data = response.data;
        const formattedData = data.map(item => ({
          EmployeeCode: item.employee[0].EmployeeCode,
          Name: `${item.employee[0].FirstName} ${item.employee[0].LastName}`,
          Leavetype: item.Leavetype,
          FromDate: item.FromDate.slice(0, 10),
          ToDate: item.ToDate.slice(0, 10),
          Reasonforleave: item.Reasonforleave,
          Status: status(item.Status),
          id: item._id,
          employeeId: item.employee[0]._id
        }));
        setRowData(formattedData);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const status = (s) => {
    switch (s) {
      case 1:
        return 'Pending';
      case 2:
        return 'Approved';
      case 3:
        return 'Rejected';
      default:
        return 'Unknown';
    }
  };

  const onLeaveApplicationHRDelete = (employeeId, leaveId) => {
    if (window.confirm('Are you sure to delete this record?')) {
      axios
        .delete(`http://localhost:4000/api/leave-application-hr/${employeeId}/${leaveId}`, {
          headers: {
            authorization: localStorage.getItem('token') || ''
          }
        })
        .then(() => {
          loadLeaveApplicationHRData(); // Refresh the data after deletion
        })
        .catch(err => {
          console.error(err);
        });
    }
  };

  return (
    <div>
      <h2>Employee Leave Application Details</h2>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '45px' }}>
          <RingLoader size={50} color={'#0000ff'} loading={true} />
        </div>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>Employee Code</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Leave Type</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>From Date</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>To Date</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Reason for Leave</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Status</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Edit</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {rowData.map((data, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{data.EmployeeCode}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{data.Name}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{data.Leavetype}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{data.FromDate}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{data.ToDate}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{data.Reasonforleave}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{data.Status}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <button onClick={() => onEditLeaveApplicationHR(data)}>Edit</button>
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <button onClick={() => onLeaveApplicationHRDelete(data.employeeId, data.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LeaveApplicationHRTable;
