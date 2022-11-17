import React,{ useEffect, useState } from "react";
import "./App.css";
import UsersTable from "./components/UsersTable";
import Modal from 'react-bootstrap/Modal';

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
  }, []);

  return (
    <div className="App">
      <button className="button-3" variant="primary" onClick={handleShow}>Add new User</button>
      {userInfo && <UsersTable userInformation={userInfo}></UsersTable>}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
     
      
    </div>
  );
}

export default App;
