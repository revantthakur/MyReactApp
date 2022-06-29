import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
const SideBar = () => {
  const [selected, setSelected] = useState("products");

  const selectedStyle = { backgroundColor: "green", color: "white" };
  return (
    <div className="SideBar">
      <ul>
        <Link
          className="link"
          style={{ textDecoration: "none" }}
          to="/products"
        >
          <li
            className="list-items"
            style={selected === "products" ? selectedStyle : {}}
            onClick={() => {
              setSelected("products");
            }}
          >
            Products
          </li>
        </Link>
        <Link
          className="link"
          style={{ textDecoration: "none" }}
          to="/customer"
        >
          <li
            className="list-items"
            style={selected === "customer" ? selectedStyle : {}}
            onClick={() => {
              setSelected("customer");
            }}
          >
            Customer
          </li>
        </Link>
        <Link className="link" style={{ textDecoration: "none" }} to="/demos">
          <li
            className="list-items"
            style={selected === "Demos" ? selectedStyle : {}}
            onClick={() => {
              setSelected("Demos");
            }}
          >
            Demos
          </li>
        </Link>
        <Link
          className="link"
          style={{ textDecoration: "none" }}
          to="/demoscripts"
        >
          <li
            className="list-items"
            style={selected === "demoscripts" ? selectedStyle : {}}
            onClick={() => {
              setSelected("demoscripts");
            }}
          >
            Demoscripts
          </li>
        </Link>
        <Link
          className="link"
          style={{ textDecoration: "none" }}
          to="/salesteam"
        >
          <li
            className="list-items"
            style={selected === "salesteam" ? selectedStyle : {}}
            onClick={() => {
              setSelected("salesteam");
            }}
          >
            SalesTeam
          </li>
        </Link>
        <Link
          className="link"
          style={{ textDecoration: "none" }}
          to="/settings"
        >
          <li
            className="list-items"
            style={selected === "settings" ? selectedStyle : {}}
            onClick={() => {
              setSelected("settings");
            }}
          >
            Setting
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
