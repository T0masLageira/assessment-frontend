import React, { useState,useEffect } from "react";
import "./UsersTable.css";
import Modal from "react-bootstrap/Modal";

import FormUpdateUser from "./FormUpdateUser"

function UsersTable(props) {
  const [userInfo, setUserInfo] = useState();
  const [show, setShow] = useState(false);
   const [usertToDelete, setUserToDelete]=useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleDeletion(e){
    setUserToDelete(e.target.value);
  }

  useEffect(()=>{
    props.onClickDelete(usertToDelete);
    props.onClickDelete();

  },[usertToDelete])

  function updateUser(updatedUserInfo){
    fetch(`http://localhost:8080/api/v1/add-new-user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id:updatedUserInfo.id,
        name: updatedUserInfo.name,
        surName: updatedUserInfo.surName,
        phoneNumber: updatedUserInfo.phoneNumber,
        email: updatedUserInfo.email,
      })
    });
  }

  return (
    <div className="table-wrapper">
      <table className="fl-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Action Buttons</th>
          </tr>
        </thead>
        <tbody>
          {props.userInformation.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.surName}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.email}</td>
              <button className="button-delete" onClick={handleDeletion} value={user.id}>Delete</button>
              <button className="button-update" onClick={()=>{setUserInfo(user); handleShow()}}>Update</button>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update USer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormUpdateUser userInfoToUpdate={userInfo} onSubmitClick={updateUser}
            onClickClose={handleClose}></FormUpdateUser>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}

export default UsersTable;
