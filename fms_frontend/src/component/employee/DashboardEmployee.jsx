import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import NavBar from "../NavBar.jsx";
import PersonalInfo from "./PersonalInfo.jsx";
import Education from "./Education.jsx";
import FamilyInfo from "./FamilyInfo.jsx";
import WorkExperience from "./WorkExperience.jsx";
import LeaveApplicationEmp from "./LeaveApplicationEmp.jsx";
import NotFound404 from ".././NotFound404"

const DashboardHR = ({ data, onLogout }) => {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    const sidebar = document.getElementById("sidebar");
    if (checked) {
      sidebar.style.display = "none";
    } else {
      sidebar.style.display = "block";
    }
    setChecked(!checked);
  };

  return (
      <div style={outerMainDivStyle}>
        <div style={outerNavStyle}>
          <NavBar loginInfo={data} checked={checked} handleChange={handleChange} onLogout={onLogout} />
        </div>

        <div style={mainNonNavStyle}>
          <div id="sidebar" style={sidebarStyle}>
            <div style={sidebarTopContentStyle} />
            <div style={mainTitleStyle}>Employee</div>
            <ul style={navbarUlStyle}>
              <li style={navbarLiStyle}>
                <Link
                  to={`/employee/${data["_id"]}/personal-info`}
                  style={linkStyle}
                >
                  Personal Information
                </Link>
              </li>
              <li style={navbarLiStyle}>
                <Link
                  to={`/employee/${data["_id"]}/education`}
                  style={linkStyle}
                >
                  Education
                </Link>
              </li>
              <li style={navbarLiStyle}>
                <Link
                  to={`/employee/${data["_id"]}/family-info`}
                  style={linkStyle}
                >
                  Dependents
                </Link>
              </li>
              <li style={navbarLiStyle}>
                <Link
                  to={`/employee/${data["_id"]}/work-experience`}
                  style={linkStyle}
                >
                  Work Experience
                </Link>
              </li>
              <li style={navbarLiStyle}>
                <Link
                  to={`/employee/${data["_id"]}/leave-application-emp`}
                  style={linkStyle}
                >
                  Leave Application
                </Link>
              </li>
            </ul>
          </div>

          <div style={mainAreaStyle}>
            <Routes>
              <Route
                exact
                path="/:id/personal-info"
                element={<PersonalInfo data={data} back={false} />}
              />
              <Route
                exact
                path="/:id/education"
                element={<Education data={data} back={false} />}
              />
              <Route
                exact
                path="/:id/family-info"
                element={<FamilyInfo data={data} back={false} />}
              />
              <Route
                exact
                path="/:id/work-experience"
                element={<WorkExperience data={data} back={false} />}
              />
              <Route
                exact
                path="/:id/leave-application-emp"
                element={<LeaveApplicationEmp data={data} />}
              />
              {/* <Route path="*" element={<NotFound404 />} /> */}
            </Routes>
          </div>
        </div>
      </div>
  );
};

// Inline styles
const outerMainDivStyle = {
  display: "flex",
  height: "100vh",
};

const outerNavStyle = {
  width: "100%",
};

const mainNonNavStyle = {
  display: "flex",
  flexDirection: "row",
  flex: 1,
};

const sidebarStyle = {
  width: "200px",
  backgroundColor: "#f4f4f4",
  padding: "10px",
};

const sidebarTopContentStyle = {
  height: "50px",
};

const mainTitleStyle = {
  fontWeight: "bold",
  marginBottom: "20px",
};

const navbarUlStyle = {
  listStyleType: "none",
  padding: "0",
};

const navbarLiStyle = {
  marginBottom: "10px",
};

const linkStyle = {
  textDecoration: "none",
  color: "#333",
};

const mainAreaStyle = {
  flex: 1,
  padding: "20px",
};

export default DashboardHR;
