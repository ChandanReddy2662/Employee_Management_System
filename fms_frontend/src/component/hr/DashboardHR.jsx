import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
import Role from '../Role';
import NavBar from '../NavBar';
import Position from '../Position';
import Department from '../Department';
import Country from '../Country';
import State from '../State';
import City from '../City';
import Company from '../Company';
import Employee from '../Employee';
import Salary from '../Salary';
import LeaveApplicationHR from './LeaveApplicationHR';
import NotFound404 from ".././NotFound404"

const DashboardHR = ({ data, onLogout }) => {
  const [checked, setChecked] = useState(true);
  const navigate = useNavigate()

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
      <div style={{ display: 'flex' }}>
        <div style={{
          width: checked ? '200px' : '0',
          transition: 'width 0.3s',
          backgroundColor: '#f4f4f4',
          padding: '10px',
          overflow: 'hidden'
        }}>
          <div style={{ marginBottom: '20px', fontWeight: 'bold' }}>
            <span style={{ fontSize: '24px' }}>HR</span>
          </div>
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            <li>
              <Link to="employee" style={{ textDecoration: 'none', color: '#000' }}>
                <span style={{ marginRight: '8px' }}>👤</span>User
              </Link>
            </li>
            <li>
              <Link to="salary" style={{ textDecoration: 'none', color: '#000' }}>
                <span style={{ marginRight: '8px' }}>💵</span>Salary
              </Link>
            </li>
            <li>
              <Link to="leave-application-hr" style={{ textDecoration: 'none', color: '#000' }}>
                <span style={{ marginRight: '8px' }}>📄</span>Leave Application
              </Link>
            </li>
            <li>
              <Link to="company" style={{ textDecoration: 'none', color: '#000' }}>
                <span style={{ marginRight: '8px' }}>🌆</span>Company
              </Link>
            </li>
            <li>
              <Link to="role" style={{ textDecoration: 'none', color: '#000' }}>
                <span style={{ marginRight: '8px' }}>👥</span>Role
              </Link>
            </li>
            <li>
              <Link to="position" style={{ textDecoration: 'none', color: '#000' }}>
                <span style={{ marginRight: '8px' }}>🪑</span>Position
              </Link>
            </li>
            <li>
              <Link to="department" style={{ textDecoration: 'none', color: '#000' }}>
                <span style={{ marginRight: '8px' }}>🏢</span>Department
              </Link>
            </li>
            <li>
              <Link to="country" style={{ textDecoration: 'none', color: '#000' }}>
                <span style={{ marginRight: '8px' }}>🌍</span>Country
              </Link>
            </li>
            <li>
              <Link to="state" style={{ textDecoration: 'none', color: '#000' }}>
                <span style={{ marginRight: '8px' }}>🏛️</span>State
              </Link>
            </li>
            <li>
              <Link to="city" style={{ textDecoration: 'none', color: '#000' }}>
                <span style={{ marginRight: '8px' }}>🏙️</span>City
              </Link>
            </li>
          </ul>
        </div>
        <div style={{ flex: 1, padding: '10px' }}>
          <NavBar loginInfo={data} checked={checked} handleChange={handleChange} onLogout={onLogout} />
          <div style={{ marginBottom: '20px' }}>
            <button onClick={handleChange} style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>
              Toggle Sidebar
            </button>
          </div>
          <Routes>
            <Route path="employee" element={<Employee />} />
            <Route path="salary" element={<Salary />} />
            <Route path="company" element={<Company />} />
            <Route path="role" element={<Role />} />
            <Route path="position" element={<Position />} />
            <Route path="department" element={<Department />} />
            <Route path="country" element={<Country />} />
            <Route path="state" element={<State />} />
            <Route path="city" element={<City />} />
            <Route path="leave-application-hr" element={<LeaveApplicationHR />} />
            <Route path="*" element={<NotFound404 />} />  
          </Routes>
        </div>
      </div>
  );
};

export default DashboardHR;
