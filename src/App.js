import React, { useEffect, useState } from "react";
import "./App.css";
import UsersTable from "./components/UsersTable";
import Modal from "react-bootstrap/Modal";
import FormAddUser from "./components/FormAddUser";

function App() {
  const [userInfo, setUserInfo] = useState();
  const [show, setShow] = useState(false);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/get-all-users")
      .then((response) => response.json())

      .then((userInformation) => {
        setUserInfo(userInformation);
      });
  }, [show]);

  function postNewUSerInfo(newUserInfo) {
    fetch("http://localhost:8080/api/v1/add-new-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newUserInfo.name,
        surName: newUserInfo.surName,
        phoneNumber: newUserInfo.phoneNumber,
        email: newUserInfo.email,
      }),
    });
  }
 

  function deleteUserOnClick(userId) {
    fetch(`http://localhost:8080/api/v1/delete-user/${userId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    setShow(false);
  }
  

  return (
    <div className="App">
      <button className="button-3" variant="primary" onClick={handleShow}>
        Add new User
      </button>
      {userInfo && (
        <UsersTable
          userInformation={userInfo}
          onClickDelete={deleteUserOnClick}
          
        ></UsersTable>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New USer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormAddUser
            onSubmitClick={postNewUSerInfo}
            onClickClose={handleClose}
          ></FormAddUser>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
