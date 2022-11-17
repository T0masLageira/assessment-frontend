import React from "react";
import { useState } from "react";
import "./FormUpdateUser.css";

function FormUpdateUser(props) {
    const [userInfoData, setUserInfoData] = useState({
      name: "",
      surName: "",
      phoneNumber: "",
      email: "",
    });
    const [show, setShow] = useState(false);
  
    const handleChange = (event) => {
      setUserInfoData({
        ...userInfoData,
        [event.target.name]: event.target.value,
      });
    };
  
    function onSubmitHanlder(e) {
      e.preventDefault();
      props.onSubmitClick(userInfoData);
      props.onClickClose();
    }
  
    function handleClose() {
      props.onClickClose();
    }
  
    return (
      <form onSubmit={onSubmitHanlder}>
        <div>
          <label>Name: </label>
          <input
            required
            id="name"
            placeholder="Insert name here"
            value={userInfoData.name}
            onChange={handleChange}
            name="name"
          />
        </div>
        <div>
          <label>Last Name: </label>
          <input
            required
            id="surname"
            placeholder="Insert surname here"
            value={userInfoData.surName}
            onChange={handleChange}
            name="surName"
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            required
            type="email"
            id="email"
            placeholder="example@example.com"
            value={userInfoData.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div>
          <label>Phone Number: </label>
          <input
            required
            type="number"
            maxLength="9"
            id="phonenumber"
            placeholder="123456789"
            value={userInfoData.phoneNumber}
            onChange={handleChange}
            name="phoneNumber"
          />
        </div>
        <div>
        <button className="cancel" cancelForm id="buttonCancel" onClick={handleClose}>
            Cancel
          </button>
          <button className="buttonupdate" type="submit" id="buttonUpdate" onClick={true}>
            Update User
          </button>
          
        </div>
      </form>
    );
  }

export default FormUpdateUser;