import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "./Components/Sidebar/SideBar";
import Products from "./Layouts/Products/Products";
import Customer from "./Layouts/Customer/Customer";
import Demos from "./Layouts/Demos/Demos";
import DemoScripts from "./Layouts/DemoScripts/DemoScripts";
import SalesTeam from "./Layouts/SalesTeam/SalesTeam";
import Settings from "./Layouts/Settings/Settings";
const Main = () => {
  return (
    <div className="d-flex flex-row">
      <SideBar />
      <Routes>
        <Route exact path="/products" element={<Products />}></Route>
        <Route exact path="/customer" element={<Customer />}></Route>
        <Route exact path="/demos" element={<Demos />}></Route>
        <Route exact path="/demoscripts" element={<DemoScripts />}></Route>
        <Route exact path="/salesteam" element={<SalesTeam />}></Route>
        <Route exact path="/settings" element={<Settings />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
