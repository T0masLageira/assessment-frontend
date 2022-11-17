import React from "react";
import { useEffect, useState } from "react";
import "./FormAddUser.css";

function FormAddUser() {

    const [onSubmit, ModalMagic] = useState();


    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Name: </label>
                <input id="name" placeholder="Insert name here" />
            </div>
            <div>
                <label>Surname: </label>
                <input id="surname" placeholder="Insert surname here" />
            </div>
            <div>
                <label>Email: </label>
                <input type="email" id="email" placeholder="example@example.com" />
            </div>
            <div>
                <label>Phone Number: </label>
                <input type="number" maxlength="9" id="phonenumber" placeholder="123456789" />
            </div>
            <div>
                <button type="submit" id="buttonSubmit">
                    Submit
                </button>
            </div>
        </form>
    )
}
export default FormAddUser;