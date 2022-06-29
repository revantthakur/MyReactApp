import React from "react";
import "./Table.css";
import deleteicon from "./delete.png";

const Table = ({ data, setUsers }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="column">
            <th scope="col">#</th>
            <th scope="col">User</th>
            <th scope="col">Last Signed In</th>
            <th scope="col">Role</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{d.email}</td>
              <td>{new Date().toDateString()}</td>
              {/* <td>{d.lastLogin}</td> */}
              <td>{d.role}</td>
              <td
                onClick={() => {
                  const users = [...data];
                  users.splice(index, 1);
                  setUsers(users);
                  localStorage.setItem("users", JSON.stringify(users));
                }}
              >
                <img src={deleteicon} alt="" width="15" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
