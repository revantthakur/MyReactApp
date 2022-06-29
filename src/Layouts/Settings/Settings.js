import React, { useState } from "react";
import Table from "../../Components/Table/Table";
import AddUserPopup from "./AddUserPopup";
import "./Setting.css";
const Settings = () => {
  const existingUsers = localStorage.getItem("users");

  const [users, setUsers] = useState(
    existingUsers ? JSON.parse(existingUsers) : []
  );
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="adduser"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Add User
      </button>
      <AddUserPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        users={users}
        setUsers={setUsers}
      />
      <Table data={users} setUsers={setUsers} />
    </div>
  );
};

export default Settings;
