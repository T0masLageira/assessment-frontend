import React from "react";
import "./UsersTable.css";

function UsersTable(props) {
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
            <tr key={user.name}>
              <td>{user.name}</td>
              <td>{user.surName}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.email}</td>
              <button className="button-delete">Delete</button>
              <button className="button-update">Update</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
