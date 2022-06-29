import React from "react";
import logo from "./logo.png";
import login from "./login.png";
function Header() {
  return (
    <div className="d-flex flex-row bd-highlight border-bottom border-dark justify-content-between">
      <div className="p-2 bd-highlight">
        <img src={logo} alt="" width="50" height="40" />
        MY APPLICATION
      </div>
      <div className="p-2 bd-highlight">
        <img src={login} alt="" width="50" height="40" />
        Revant Thakur
      </div>
    </div>
  );
}

export default Header;
