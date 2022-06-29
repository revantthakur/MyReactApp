import React, { useState } from "react";
import Modal from "react-modal";
import "./Popup.css";
import Adduserimage from "./Adduserimage.png";
const AddUserPopup = ({ isOpen, setIsOpen, setUsers, users }) => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Admin");
  const addUser = (email, role) => {
    localStorage.setItem("users", JSON.stringify([...users, { email, role }]));
    setUsers([...users, { email, role }]);
  };
  const customStyles = {
    content: {
      width: "1000px",
      height: "500px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      padding: "0%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className="popup">
      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        contentLabel="My dialog"
        style={customStyles}
        onRequestClose={() => {
          setIsOpen(false);
        }}
      >
        <div className="d-flex">
          <div className="LoremIpsum">
            <img src={Adduserimage} alt="" width="200" class="center" />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>

          <div className="input">
            <h1>User Information</h1>
            <h5>Email Id of User</h5>
            <input
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <h5>Role</h5>
            <select
              className="select"
              name="role"
              value={role}
              onChange={(event) => {
                setRole(event.target.value);
              }}
            >
              <option value="Admin">admin</option>
              <option value="Owner">owner</option>
              <option value="Sales">sales</option>
            </select>
            <div className="role">
              <button
                className="cancel"
                onClick={() => {
                  setEmail("");
                  setRole("Admin");
                  setIsOpen(false);
                }}
              >
                Cancel
              </button>
              <button
                className="add"
                onClick={() => {
                  addUser(email, role);
                  setEmail("");
                  setRole("Admin");

                  setIsOpen(false);
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddUserPopup;
