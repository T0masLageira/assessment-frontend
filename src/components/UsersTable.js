import React, { useState,useEffect } from "react";
import "./UsersTable.css";

function UsersTable(props) {

  const [usertToDelete, setUserToDelete]=useState();

  function handleDeletion(e){
    setUserToDelete(e.target.value);
  }

  useEffect(()=>{
    props.onClickDelete(usertToDelete);
    props.onClickDelete();

  },[usertToDelete])

  return (
    <div className="table-wrapper">
      <table className="fl-table">
        <thead>
          <tr>
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
              <td>{user.name}</td>
              <td>{user.surName}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.email}</td>
              <button className="button-delete" onClick={handleDeletion} value={user.id}>Delete</button>
              <button className="button-update">Update</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
