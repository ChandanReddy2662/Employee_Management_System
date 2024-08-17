import React from 'react'
import Logo from '../img/logo.png';
import Switch from 'react-switch';

const NavBar = ({ checked, handleChange, loginInfo, onClick, onLogout }) => {
  // console.log(loginInfo)
  return (
    <div className="navbar-container">
  <div className="navbar-left">
    <img src={Logo} alt="Logo" className="navbar-logo" width={'50px'}/>
    <div className="navbar-switch-container">
      <span className="switch-wrapper">
        <Switch 
          checked={checked}
          onChange={handleChange}
          onColor="#404e67"
          onHandleColor="#ffffff"
          handleDiameter={10}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={17}
          width={35}
        />
      </span>
      <span>{loginInfo["Role"]}</span>
    </div>
  </div>

  <div className="navbar-right">
    <button onClick={onClick} className="navbar-name">
      {loginInfo["Name"]}
    </button>
    <button onClick={onLogout} className="navbar-logout">
      Log Out
    </button>
  </div>
</div>
  );
};

export default NavBar;
